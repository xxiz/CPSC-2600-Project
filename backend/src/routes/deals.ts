import express, { Router } from 'express';
import { getDeals, addDeals, deleteDealByID, getDealByID, purgeDeals } from '../controllers/dealController';

const router = Router();

router.get('/', (req, res) => {
    getDeals(req, res);
});

router.post('/', (req, res) => {
    addDeals(req, res);
});

router.delete('/', (req, res) => {
    purgeDeals(req, res);
});

router.get('/:id', (req, res) => {
    getDealByID(req, res);
});

router.delete('/:id', (req, res) => {
    deleteDealByID(req, res);
});

router.get('/run', (req, res) => {
    res.send('no');
});

export default router;