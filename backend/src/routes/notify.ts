import { Router } from 'express';
import { sendTestNotification, sendWebhookNotification } from '../controllers/notifyController';

const router = Router();

router.post('/', (req, res) => {
    sendWebhookNotification(req, res);
});

router.post('/test', (req, res) => {
    sendTestNotification(req, res);
});

export default router;