import { Router } from 'express';
import { createUrl, getAllUrl, getUrl, deleteUrl } from '../controllers/ShortenController';
import { deleteByCode } from '../models/Shorten';

const router = Router();

router.get('/:shortCode', getUrl);

router.delete('/:shortCode', deleteUrl);

router.get('/', getAllUrl);

router.post('/', createUrl);

export default router;
