import express from 'express';
import cron from 'node-cron';
import connection from './db/conn'
import cors from 'cors';

require('dotenv').config();

import customRoutes from './routes';
import User from './models/userModel';
import Deal from './models/dealModel';
import Scrape from './models/scrapeModel';
import { scrape } from './utils/scrape';
import { pushDeals } from './utils/database';

connection.then(() => {
    console.log('Connected to MongoDB');
    Deal.find({}).then((deals) => {
        console.log(`${deals.length} deals found in database`);
    });
    Scrape.find({}).then((scrape) => {
        console.log(`${scrape.length} scrape results found in database`);
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

const app = express();
app.use(cors({
    origin: 'http://localhost:3001',
}));
app.use(express.json());
app.use('/', customRoutes);

cron.schedule('* 3 * * *', () => {
    const result = scrape(1);

    result.then((result) => {
        pushDeals(result);

        // let trending_deals = getTrendingDeals(result);
        // find all users that have notifications enabled
        // send them the trending deals

        User.find({ notifications: true }).then((users) => {
            users.forEach((user) => {
                
            });
        });
    });
});

app.listen(3000, () => {
    console.log(`Backend running on http://localhost:3000`);
});