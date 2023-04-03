import express from 'express';
import { CronJob } from 'cron';
import connection from './db/conn'
import cors from 'cors';

require('dotenv').config();

import customRoutes from './routes';
import User from './models/userModel';
import Deal from './models/dealModel';
import Scrape from './models/scrapeModel';
import { scrape } from './utils/scrape';
import { pushDeals } from './utils/database';
import { notifyUser } from './utils/notify';
import { IUser } from './types';
import getTrending from './utils/trending';

connection.then(() => {
    console.log('Connected to MongoDB');
    Deal.find({}).then((deals) => {
        console.log(`${deals.length} deals found in database`);
    });
    Scrape.find({}).then((scrape) => {
        console.log(`${scrape.length} scrapes found in database`);
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

// https://github.com/kelektiv/node-cron/blob/master/examples/every_10_minutes.js
const job = new CronJob('0 */3 * * * *', async () => {
    
    const result = scrape(1);

    result.then((result) => {
        
        console.log(`Scraped ${result.data.length} deals`);
        pushDeals(result);
        
        let deals = getTrending(result.data);
        console.log(`Found ${deals.length} trending deals`);
        
        User.find({ notification: true }).then((users) => {
            
            console.log(`Found ${users.length} users to notify`);
            
            users.forEach((user : IUser) => {
                console.log(`Notifying ${user.username}`);
                notifyUser(user, deals);
            });
        });
    });

});

app.listen(3000, () => {
    console.log(`Backend running on http://localhost:3000`);
    job.start();
});