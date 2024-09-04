import { Router } from 'express';
import { getAllUrl, getUrl } from '../controllers/ShortenController';

const router = Router();

router.get('/:shortCode', getUrl);

router.get('/', getAllUrl);

export default router;
