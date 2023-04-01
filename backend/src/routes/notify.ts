import { Router } from 'express';
import { sendWebhookNotification } from '../controllers/notifyController';

const router = Router();

router.post('/', (req, res) => {
    sendWebhookNotification(req, res);
});

export default router;