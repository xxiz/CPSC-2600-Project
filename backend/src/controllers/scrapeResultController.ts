import { Request, Response } from "express";
import ScrapeResult from "../models/scrapeResultModel";

// Get all scrape results
function getScrapeResults(req: Request, res: Response) {
    ScrapeResult.find({}).then((scrapeResults) => {
        res.send({
            success: true,
            data: scrapeResults
        });
    }).catch((err) => {
        res.status(500).send({
            success: false,
            message: err.message
        });
    });
}

// Get scrape result by id
function getScrapeResultByID(req: Request, res: Response) {
    const id = req.params.id;

    ScrapeResult.findById(id).then((scrapeResult) => {
        res.send({
            success: true,
            data: scrapeResult
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

// Get the latest scrape result
function getLatestScrapeResult(req: Request, res: Response) {
    ScrapeResult.findOne({}).sort({ timestamp: -1 }).then((scrapeResult) => {
        res.send({
            success: true,
            data: scrapeResult
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

// Get latest x scrape results
function getLimitScrapeResult(req: Request, res: Response) {
    const limit = req.params.limit;

    ScrapeResult.find({}).sort({ timestamp: -1 }).limit(parseInt(limit)).then((scrapeResults) => {
        res.send({
            success: true,
            data: scrapeResults
        });
    }).catch((err) => {
        res.status(400).send({
            success: false,
            message: err.message
        });
    });
}

export { getScrapeResults, getScrapeResultByID, getLatestScrapeResult, getLimitScrapeResult };