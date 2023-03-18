import { Router } from 'express';
import Deals from './deals';
import Filters from './filters';

const router = Router();

// /api/v1 router

router.use('/api/v1/', Deals);
router.use('/api/v1/', Filters);

export default router;