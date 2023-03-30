import express from 'express';
import cron from 'node-cron';
import connection from './db/conn'

require('dotenv').config();

import router from './routes';
import Deal from './models/deal';

connection.then(() => {
    console.log('Connected to MongoDB');
    // list all collections, and every document in each collection
    Deal.find({}).then((deals) => {
        console.log(deals);
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

let sample_deal = [
    {
        title: 'Deal 1',
        topic: 'Public Mobile',
        link: 'https://forums.redflagdeals.com/public-mobile-free-sim-available-public-mobile-2606555/',
        description: 'Public Mobile is offering a free SIM. One per customer. If you plan to switch to PM or switch in the fall when the BF deals come, go get your free SIM. Free until Mar 31. PM reserves the right to remove this offer at any time so dont abuse this! ++ Limited time offer. Limit of one (1) free SIM card per customer. Regular cost of Public Mobile SIM card is $10 +tax. Offer applicable only to the first SIM card purchased; any subsequent SIM cards purchased will be charged the regular price o...',
        last_updated: "Mar 14th, 2023 9:40 pm",
        votes: 354,
        raw: {
            last_updated: 'Last Updated Mar 14th, 2023 9:40 pm',
            votes: '+354',
            description: 'Public Mobile is offering a free SIM. One per customer. If you plan to switch to PM or switch in the fall when the BF deals come, go get your free SIM. Free until Mar 31. PM reserves the right to remove this offer at any time so dont abuse this! ++ Limited time offer. Limit of one (1) free SIM card per customer. Regular cost of Public Mobile SIM card is $10 +tax. Offer applicable only to the first SIM card purchased; any subsequent SIM cards purchased will be charged the regular price o...',
            link: 'https://forums.redflagdeals.com/public-mobile-free-sim-available-public-mobile-2606555/',
            topic: '[Public Mobile]',
            title: 'Free SIM Available from Public Mobile.'
        }
    },
];

const app = express();
app.use('/', router);

cron.schedule('*/5 * * * * *', () => {
    const now = new Date();
    console.log(`Current time is ${now.toLocaleTimeString()}`);
});

app.listen(3000, () => {
    console.log(`Backend running on http://localhost:3000`);
});