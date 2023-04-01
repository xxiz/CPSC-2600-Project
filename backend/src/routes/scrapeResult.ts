import express, { Router } from 'express';
import { getScrapeResults, getScrapeResultByID, getLatestScrapeResult, getLimitScrapeResult } from '../controllers/scrapeResultController';

const router = Router();

router.get('/', (req, res) => {
    getScrapeResults(req, res);
});

router.get('/:id', (req, res) => {
    getScrapeResultByID(req, res);
});

router.get('/latest', (req, res) => {
    getLatestScrapeResult(req, res);
});

router.get('/limit/:limit', (req, res) => {
    getLimitScrapeResult(req, res);
});


export default router;