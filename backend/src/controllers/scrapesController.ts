import express, { Request, Response } from "express";
import Scrape from "../models/scrapeModel";

function getScrapes(req: Request, res: Response) {
    Scrape.find({}).then((scrapes) => {
        res.send({
            success: true,
            data: scrapes
        });
    }).catch((err) => {
        res.status(500).send({
            success: false,
            message: err.message
        });
    });
}

function deleteScrapes(req: Request, res: Response) {
    Scrape.deleteMany({}).then((scrapes) => {
        res.send({
            success: true,
            data: scrapes
        });
    }).catch((err) => {
        res.status(500).send({
            success: false,
            message: err.message
        });
    });
}

function getLatestScrape(req: Request, res: Response) {
    Scrape.findOne({}).sort({ timestamp: -1 }).then((scrape) => {
        res.send({
            success: true,
            data: scrape
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

function getLimitScrapes(req: Request, res: Response) {
    const limit = req.params.limit;

    Scrape.find({}).sort({ timestamp: -1 }).limit(parseInt(limit)).then((scrapes) => {
        res.send({
            success: true,
            data: scrapes
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

export { getScrapes, getLatestScrape, getLimitScrapes, deleteScrapes };