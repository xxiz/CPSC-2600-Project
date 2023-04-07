import express, { Request, Response } from "express";
import axios from "axios";

async function sendTestNotification(req: Request, res: Response) {
  try {
    const { webhook_url } = req.body;

    const endpoint = webhook_url;
    const embed = {
      username: "SalesScout",
      title: "Test Notification",
      description: `
        Hello, this is a test notification from SalesScout. :wave:
      `,
    };

    await axios.post(endpoint, { embeds: [embed] });

    res.status(200).send({
      success: true,
      message: "Webhook sent successfully",
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err.message,
    });
  }
}

export { sendTestNotification };
