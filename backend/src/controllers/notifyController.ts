import express, { Request, Response } from "express";
import axios from "axios";

// Refrence: https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html
function sendWebhookNotification(req: Request, res: Response) {
    
    try {
        const webook = req.body.webhook;
        const deal = req.body.deal;

        const lastUpdatedDate = new Date(deal.last_updated);
        const lastUpdatedString = lastUpdatedDate.toLocaleString();

        const message  = {
            content: '',
            embeds: [
              {
                title: deal.title,
                url: deal.url,
                fields: [
                  { name: 'Last Updated', value: lastUpdatedString, inline: true },
                  { name: 'Votes', value: deal.votes.toString(), inline: true },
                  { name: 'Replies', value: deal.replies.toString(), inline: true },
                ],
                timestamp: lastUpdatedDate.toISOString(),
              },
            ],
          };

        axios.post(webook, {
            content: message
        }).then((response) => {
            res.send({
                success: true,
                data: response.data
            });
        }).catch((err) => {
            res.status(400).send({
                success: false,
                message: err.message
            });
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }
}

export { sendWebhookNotification }