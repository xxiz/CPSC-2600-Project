import { IScrapeReturn } from "./../types/index";
import Deal from "./../models/dealModel";
import Scrape from "../models/scrapeModel";

// Refrence: https://mongoosejs.com/docs/api/model.html#Model.find()
async function pushDeals(scrapeReturn: IScrapeReturn) {
  let deals = [];

  console.log(`Pushing ${scrapeReturn.data.length} deals to database`);

  if (scrapeReturn.data.length > 0) {
    for (let deal of scrapeReturn.data) {
      const existingDeal = await Deal.findOne({ url: deal.url });

      if (existingDeal) {
        let updateDeal = await Deal.updateOne({ _id: existingDeal._id }, deal);

        if (updateDeal) {
          deals.push(existingDeal._id);
        }
      } else {
        let newDeal = await Deal.create(deal);

        if (newDeal) {
          deals.push(newDeal._id);
        }
      }
    }
  }

  const end_time = new Date().getTime();
  const elapsed_ms = end_time - scrapeReturn.start_time;

  const scrape = new Scrape({
    count: scrapeReturn.data.length,
    timestamp: end_time,
    elapsed_ms,
    deals,
  });

  return await scrape.save();
}

export { pushDeals };
