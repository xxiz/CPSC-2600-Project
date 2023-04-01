import express, { Request, Response } from "express";
import axios from "axios";
import { MessageBuilder, Webhook } from "discord-webhook-node";
import User from "../models/userModel";

// Refrence: https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html
function sendWebhookNotification(req: Request, res: Response) {

    try {
        const username = req.body.username;
        const deal = req.body.deal;

        const lastUpdatedDate = new Date(deal.last_updated);
        const lastUpdatedString = lastUpdatedDate.toLocaleString();

        User.findOne({ username: username }).then((user) => {
            if (!user) {
                res.status(400).send({
                    success: false,
                    message: "User not found"
                });
            } else {
                const webhook = user.webhook_url;
                const hook = new Webhook(webhook);

                const embed = new MessageBuilder()
                    .setTitle(deal.title)
                    .setUrl(deal.url)
                    .setDescription(`
            **Title:** ${deal.title}
            **Date:** ${lastUpdatedString}
            **Votes:** ${deal.votes}
            **Replies:** ${deal.replies}
            **Last Updated:** ${lastUpdatedString}
        `);
            }
        });

    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }
}

export { sendWebhookNotification }