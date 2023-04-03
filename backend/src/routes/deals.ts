import { Router } from 'express';
import { getDeals, getTrendingDeals, addDeals, deleteDealByID, getDealByID, purgeDeals } from '../controllers/dealController';

const router = Router();

router.get('/', (req, res) => {
    getDeals(req, res);
});

router.get('/trending', (req, res) => {
    getTrendingDeals(req, res);
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

export default router;