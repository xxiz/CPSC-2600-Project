import { Router } from 'express';
import { sendTestNotification } from '../controllers/notifyController';

const router = Router();

router.post('/test', (req, res) => {
    sendTestNotification(req, res);
});

export default router;