import express, { Router } from 'express';

const router = Router();

router.get('/deals', (req, res) => {
    res.send('All Deals');
});

export default router;