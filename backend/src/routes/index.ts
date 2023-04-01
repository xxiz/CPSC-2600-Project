import { Router } from 'express';
import Deals from './deals';
import ScrapeResult from './scrapeResult';

const router = Router();

router.get('/', (req, res) => {
    res.send('no')
});

router.use('/api/v1/deals', Deals);
router.use('/api/v1/scrapes', ScrapeResult);

export default router;