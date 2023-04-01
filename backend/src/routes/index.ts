import { Router } from 'express';
import Deals from './deals';
import ScrapeResult from './scrapeResult';
import Users from './users';
import Notify from './notify';

const router = Router();

router.get('/', (req, res) => {
    res.send('no')
});

router.use('/api/v1/deals', Deals);
router.use('/api/v1/scrapes', ScrapeResult);
router.use('/api/v1/users', Users);
router.use('/api/v1/notify', Notify);

export default router;