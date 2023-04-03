"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cron_1 = require("cron");
const conn_1 = __importDefault(require("./db/conn"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const routes_1 = __importDefault(require("./routes"));
const userModel_1 = __importDefault(require("./models/userModel"));
const dealModel_1 = __importDefault(require("./models/dealModel"));
const scrapeModel_1 = __importDefault(require("./models/scrapeModel"));
const scrape_1 = require("./utils/scrape");
const database_1 = require("./utils/database");
const notify_1 = require("./utils/notify");
const trending_1 = __importDefault(require("./utils/trending"));
conn_1.default.then(() => {
    console.log('Connected to MongoDB');
    dealModel_1.default.find({}).then((deals) => {
        console.log(`${deals.length} deals found in database`);
    });
    scrapeModel_1.default.find({}).then((scrape) => {
        console.log(`${scrape.length} scrapes found in database`);
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
}));
app.use(express_1.default.json());
app.use('/', routes_1.default);
// https://github.com/kelektiv/node-cron/blob/master/examples/every_10_minutes.js
const job = new cron_1.CronJob('0 */1 * * * *', async () => {
    const result = (0, scrape_1.scrape)(1);
    result.then((result) => {
        console.log(`Scraped ${result.data.length} deals`);
        (0, database_1.pushDeals)(result);
        let deals = (0, trending_1.default)(result.data);
        console.log(`Found ${deals.length} trending deals`);
        userModel_1.default.find({ notification: true }).then((users) => {
            console.log(`Found ${users.length} users to notify`);
            users.forEach((user) => {
                console.log(`Notifying ${user.username}`);
                (0, notify_1.notifyUser)(user, deals);
            });
        });
    });
});
app.listen(3000, () => {
    console.log(`Backend running on http://localhost:3000`);
    job.start();
});
