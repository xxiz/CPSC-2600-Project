// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const Deal = require('./models/deal');
// const express = require('express');
// require('dotenv').config();

// const app = express();
// const PORT = 3001;

// app.get('/', (req: any, res: any) => {
//     const deals = [
//         {
//             title: 'Deal 1',
//             topic: 'Public Mobile',
//             link: 'https://forums.redflagdeals.com/public-mobile-free-sim-available-public-mobile-2606555/',
//             description: 'Public Mobile is offering a free SIM. One per customer. If you plan to switch to PM or switch in the fall when the BF deals come, go get your free SIM. Free until Mar 31. PM reserves the right to remove this offer at any time so dont abuse this! ++ Limited time offer. Limit of one (1) free SIM card per customer. Regular cost of Public Mobile SIM card is $10 +tax. Offer applicable only to the first SIM card purchased; any subsequent SIM cards purchased will be charged the regular price o...',
//             last_updated: 'Mar 14th, 2023 9:40 pm',
//             votes: 354,
//             raw: {
//                 last_updated: 'Last Updated Mar 14th, 2023 9:40 pm',
//                 votes: '+354',
//                 description: 'Public Mobile is offering a free SIM. One per customer. If you plan to switch to PM or switch in the fall when the BF deals come, go get your free SIM. Free until Mar 31. PM reserves the right to remove this offer at any time so dont abuse this! ++ Limited time offer. Limit of one (1) free SIM card per customer. Regular cost of Public Mobile SIM card is $10 +tax. Offer applicable only to the first SIM card purchased; any subsequent SIM cards purchased will be charged the regular price o...',
//                 link: 'https://forums.redflagdeals.com/public-mobile-free-sim-available-public-mobile-2606555/',
//                 topic: '[Public Mobile]',
//                 title: 'Free SIM Available from Public Mobile.'
//             }
//         },
//         {
//             title: 'Deal 2',
//             topic: 'Amazon',
//             link: 'https://www.amazon.com/',
//             description: 'Get great deals on Amazon! Check out our daily deals and enjoy free shipping on eligible orders.',
//             last_updated: 'Mar 15th, 2023 12:30 pm',
//             votes: 105,
//             raw: {
//                 last_updated: 'Last Updated Mar 15th, 2023 12:30 pm',
//                 votes: '+105',
//                 description: 'Get great deals on Amazon! Check out our daily deals and enjoy free shipping on eligible orders.',
//                 link: 'https://www.amazon.com/',
//                 topic: '[Amazon]',
//                 title: 'Amazon Daily Deals'
//             }
//         },
//         {
//             title: 'Deal 3',
//             topic: 'Walmart',
//             link: 'https://www.walmart.com/',
//             description: 'Find amazing deals at Walmart! Get free two-day shipping on orders over $35.',
//             last_updated: 'Mar 14th, 2023 8:00 pm',
//             votes: 220,
//             raw: {
//                 last_updated: 'Last Updated Mar 14th, 2023 8:00 pm',
//                 votes: '+220',
//                 description: 'Find amazing deals at Walmart! Get free two-day shipping on orders over $35.',
//                 link: 'https://www.walmart.com/',
//                 topic: '[Walmart]',
//                 title: 'Walmart Deals and Free Shipping'
//             }
//         },
//         {
//             title: 'Deal 4',
//             topic: 'Target',
//             link: 'https://www.target.com/',
//             description: 'Shop at Target for amazing deals! Free shipping on orders over $35.',
//             last_updated: 'Mar 15th, 2023 10:45 am',
//             votes: 150,
//             raw: {
//                 last_updated: 'Last Updated Mar 15th, 2023 10:45 am',
//                 votes: '+150',
//                 description: 'Shop at Target for amazing deals! Free shipping on orders over $35.',
//                 link: 'https://www.target.com/',
//                 topic: '[Target]',
//                 title: 'Target Deals and Free Shipping'
//             }
//         },
//         {
//             title: 'Deal 5',
//             topic: 'Best Buy',
//             link: 'https://www.bestbuy.com/',
//             description: 'Find great deals at Best Buy! Free shipping on orders over $35.',
//             last_updated: 'Mar 15th, 2023 11:20 am',
//             votes: 75,
//             raw: {
//                 last_updated: 'Last Updated Mar 15th, 2023 11:20 am',
//                 votes: '+75',
//                 description: 'Find great deals at Best Buy! Free shipping on orders over $35.',
//                 link: 'https://www.bestbuy.com/',
//                 topic: '[Best Buy]',
//                 title: 'Best Buy Deals and Free Shipping'
//             }
//         }
//     ]
//     Deal.insertMany(deals, (err: Error) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Deals inserted into database');
//         }
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Running On http://localhost:${PORT}`);
// });

import express from 'express';
import router from './routes';

const app = express();
app.use('/', router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});