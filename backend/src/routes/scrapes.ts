import express, { Router } from 'express';
import { deleteScrapes, getLatestScrape, getLimitScrapes, getScrapes } from '../controllers/scrapesController';

const router = Router();

router.get('/', (req, res) => {
    getScrapes(req, res);
});

router.delete('/', (req, res) => {
    deleteScrapes(req, res);
});

router.get('/latest', (req, res) => {
    getLatestScrape(req, res);
});

router.get('/limit/:limit', (req, res) => {
    getLimitScrapes(req, res);
});


export default router;