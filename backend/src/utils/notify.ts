import { IDeal, IUser } from "./../types/index";
import User from "./../models/userModel";
import axios from "axios";
import Deal from "../models/dealModel";

// Refrence: https://discord.com/developers/docs/resources/webhook#execute-webhook
async function notifyUser(user: IUser, deals: IDeal[]): Promise<void> {
  const { username, webhook_url } = user;

  for (const deal of deals) {
    const [foundUser, foundDeal] = await Promise.all([
      User.findOne({ username }),
      Deal.findOne({ url: deal.url }),
    ]);

    if (foundUser && foundDeal && !foundUser.history.includes(foundDeal._id)) {
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
        `,
      };

      try {
        const result = await axios.post(webhook_url, { embeds: [embed] });
        if (result.status === 204) {
          foundUser.history.push(foundDeal._id);
          await foundUser.save();
        }
      } catch (err) {
        console.log(
          `Error sending webhook to ${username} @ ${webhook_url}\n${err.message}`
        );
      }
    } else {
      console.log(`Deal ${deal.title} already sent to ${username}`);
    }
  }
}

export { notifyUser };
