import { IDeal, IUser } from './../types/index';
import User from './../models/userModel';
import axios from 'axios';
import Deal from '../models/dealModel';

async function notifyUser(user: IUser, deals: IDeal[]): Promise<void> {
  const username = user.username;
  const endpoint = user.webhook_url;

  for (const deal of deals) {
    const isDealSent = user.history.find(async (historyDeal) => {
      const foundDeal = await Deal.findById(historyDeal);
      return foundDeal?.url === deal.url;
    });

    if (isDealSent) {
      console.log(`Deal ${deal.title} already sent to ${username}`);
      continue;
    }

    console.log(`Sending deal ${deal.title} to ${username}`);

    const lastUpdatedDate = new Date(deal.last_updated);
    const lastUpdatedString = lastUpdatedDate.toLocaleString();

    const embed = {
      username: "SalesScout",
      title: deal.title,
      url: deal.url,
      description: `
        **Date:** ${lastUpdatedString}
        **Votes:** ${deal.votes}
        **Replies:** ${deal.replies}
        **Last Updated:** ${lastUpdatedString}
      `
    };

    try {
      const result = await axios.post(endpoint, { embeds: [embed] });
      if (result.status === 204) {
        const foundUser = await User.findOne({ username });
        const foundDeal = await Deal.findOne({ url: deal.url });
        if (foundUser && foundDeal && !foundUser.history.includes(foundDeal._id)) {
          foundUser.history.push(foundDeal._id);
          await foundUser.save();
        }
      }
    } catch (err) {
      console.log(`Error sending webhook to ${username} @ ${endpoint}\n${err.message}`);
    }
  }
}

export { notifyUser };