import express, { Request, Response } from "express";
import axios from "axios";
import User from "../models/userModel";

// async function sendWebhookNotification(req: Request, res: Response) {
//   try {
//     const { username, deal } = req.body;
//     const lastUpdatedDate = new Date(deal.last_updated);
//     const lastUpdatedString = lastUpdatedDate.toLocaleString();

//     const user = await User.findOne({ username: username });

//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "User not found"
//       });
//     }

//     const endpoint = user.webhook_url;
//     const embed = {
//       username: "SalesScout Notification",
//       title: deal.title,
//       url: deal.url,
//       description: `
//         **Date:** ${lastUpdatedString}
//         **Votes:** ${deal.votes}
//         **Replies:** ${deal.replies}
//         **Last Updated:** ${lastUpdatedString}
//       `
//     };

//     await axios.post(endpoint, { embeds: [embed] });

//     res.status(200).send({
//       success: true,
//       message: "Webhook sent successfully"
//     });
//   } catch (err) {
//     res.status(400).send({
//       success: false,
//       message: err.message
//     });
//   }
// }

async function sendTestNotification(req: Request, res: Response) {
  try {
    const { webhook_url } = req.body;

    const endpoint = webhook_url;
    const embed = {
      username: "SalesScout",
      title: "Test Notification",
      description: `
        Hello, this is a test notification from SalesScout. :wave:
      `
    };

    await axios.post(endpoint, { embeds: [embed] });

    res.status(200).send({
      success: true,
      message: "Webhook sent successfully"
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err.message
    });
  }
}

export { sendTestNotification };