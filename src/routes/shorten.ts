import { Router } from 'express';
import { createUrl, getAllUrl, getUrl } from '../controllers/ShortenController';

const router = Router();

router.get('/:shortCode', getUrl);

router.get('/', getAllUrl);

router.post('/', createUrl);

export default router;
