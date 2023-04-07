// Modules
import express from "express";
import { CronJob } from "cron";
import cors from "cors";
import dotenv from "dotenv";

// Types
import { IUser } from "./types";
import connection from "./db/conn";

// Routes
import customRoutes from "./routes";

// Models
import User from "./models/userModel";
import Deal from "./models/dealModel";
import Scrape from "./models/scrapeModel";

// Utils
import { scrape } from "./utils/scrape";
import { pushDeals } from "./utils/database";
import { notifyUser } from "./utils/notify";
import getTrending from "./utils/trending";

dotenv.config();

// MongoDB
connection
  .then(() => {
    console.log("Connected to MongoDB");

    Deal.find({}).then((deals) => {
      console.log(`${deals.length} deals found in database`);
    });

    Scrape.find({}).then((scrape) => {
      console.log(`${scrape.length} scrapes found in database`);
    });
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
    process.exit(1);
  });

// Express
const app = express();

// Convert env variable to array
const origins = process.env.CORS_ORIGIN.split(",").map((origin) =>
  origin.trim()
);

app.use(
  cors({
    origin: origins,
    optionsSuccessStatus: 200,
  })
);

// Parse JSON
app.use(express.json());

// Load routes
app.use("/", customRoutes);

// Job to handle scraping for deals and notifying users

// Refrence: https://www.npmjs.com/package/cron & https://crontab.guru/
const timing = process.env.CRON_TIMING || "0 */3 * * * *";
new CronJob(
  timing,
  async () => {
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
  "America/Los_Angeles"
);

// Start server
const port = process.env.PORT || "3000";
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
