import express from 'express';
import cron from 'node-cron';
import connection from './db/conn'
import cors from 'cors';

require('dotenv').config();

import customRoutes from './routes';
import Deal from './models/dealModel';
import ScrapeResult from './models/scrapeResultModel';
import { scrape } from './utils/scrape';
import { pushDeals } from './utils/database';

connection.then(() => {
    console.log('Connected to MongoDB');
    Deal.find({}).then((deals) => {
        console.log(`${deals.length} deals found in database`);
    });
    ScrapeResult.find({}).then((scrapeResults) => {
        console.log(`${scrapeResults.length} scrape results found in database`);
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

const app = express();
app.use(express.json());
app.use('/', customRoutes);
app.use(cors({
    origin: [
        'http://localhost:3000', // development
        'http://projects.ashwin.lol/', // production
    ]
}));

cron.schedule('* 5 * * * *', () => {
    const result = scrape(1);

    result.then((result) => {
        pushDeals(result);
    });
});

app.listen(3000, () => {
    console.log(`Backend running on http://localhost:3000`);
});