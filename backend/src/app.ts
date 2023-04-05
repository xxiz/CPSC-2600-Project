import express from 'express';
import { CronJob } from 'cron';
import cors from 'cors';
import dotenv from 'dotenv';

import { IUser } from './types';
import connection from './db/conn'

import customRoutes from './routes';

import User from './models/userModel';
import Deal from './models/dealModel';
import Scrape from './models/scrapeModel';

import { scrape } from './utils/scrape';
import { pushDeals } from './utils/database';
import { notifyUser } from './utils/notify';
import getTrending from './utils/trending';

dotenv.config();

// MongoDB
connection.then(() => {
    console.log('Connected to MongoDB');

    Deal.find({}).then((deals) => {
        console.log(`${deals.length} deals found in database`);
    });

    Scrape.find({}).then((scrape) => {
        console.log(`${scrape.length} scrapes found in database`);
    });

}).catch((err) => {
    console.log('Could not connect to MongoDB', err);
    process.exit(1);
});

// Express
const app = express();

// Get CORS origin from environment variable
const accessControlAllowOrigins = () => {
    
    const origins = process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim());
    
    return (req, callback) => {
        const origin = req.header('Origin');

        if (origins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS Disallow'));
        }

    };
};

// CORS
app.use(cors({
    origin: accessControlAllowOrigins || 'http://localhost:8080',
}));

// Parse JSON
app.use(express.json());

// Load routes
app.use('/', customRoutes);

// Job to handle scraping for deals and notifying users
const timing = process.env.CRON_TIMING || '0 */3 * * * *';
new CronJob(timing, async () => {

    const result = scrape();

    result.then((result) => {

        console.log(`Scraped ${result.data.length} deals`);
        pushDeals(result);

        let deals = getTrending(result.data);
        console.log(`Found ${deals.length} trending deals`);

        User.find({ notification: true }).then((users) => {

            console.log(`Found ${users.length} users to notify`);

            users.forEach((user: IUser) => {
                console.log(`Notifying ${user.username}`);
                notifyUser(user, deals);
            });
        });
    });
},
    null,
    true,
    'America/Vancouver'
);

const port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});