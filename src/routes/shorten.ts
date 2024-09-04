import { Router } from 'express';
import {
  createUrl,
  getAllUrl,
  getUrl,
  deleteUrl,
  updateUrl,
} from '../controllers/ShortenController';
import { deleteByCode } from '../models/Shorten';

const router = Router();

router.get('/:shortCode', getUrl);

router.delete('/:shortCode', deleteUrl);

router.put('/:shortCode', updateUrl);

router.get('/', getAllUrl);

router.post('/', createUrl);

export default router;
