import { Router } from 'express';

const router = Router();

router.get('/filters', (req, res) => {
    res.send('All Filters');
});

export default router;