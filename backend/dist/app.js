"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_cron_1 = __importDefault(require("node-cron"));
const conn_1 = __importDefault(require("./db/conn"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const routes_1 = __importDefault(require("./routes"));
const dealModel_1 = __importDefault(require("./models/dealModel"));
const scrapeModel_1 = __importDefault(require("./models/scrapeModel"));
const scrape_1 = require("./utils/scrape");
const database_1 = require("./utils/database");
conn_1.default.then(() => {
    console.log('Connected to MongoDB');
    dealModel_1.default.find({}).then((deals) => {
        console.log(`${deals.length} deals found in database`);
    });
    scrapeModel_1.default.find({}).then((scrape) => {
        console.log(`${scrape.length} scrape results found in database`);
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
node_cron_1.default.schedule('* 3 * * *', () => {
    const result = (0, scrape_1.scrape)(1);
    result.then((result) => {
        (0, database_1.pushDeals)(result);
    });
});
app.listen(3000, () => {
    console.log(`Backend running on http://localhost:3000`);
});
