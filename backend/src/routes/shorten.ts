import { Router } from 'express';
import {
  createUrl,
  getAllUrl,
  getUrl,
  deleteUrl,
  updateUrl,
  getStats,
} from '../controllers/ShortenController';
import { shortUrlRule, urlRule } from '../validation';
import { validate } from '../middlewares';

const router = Router();

router.get('/:shortCode/stats', shortUrlRule, validate, getStats);

router.get('/:shortCode', shortUrlRule, validate, getUrl);

router.delete('/:shortCode', shortUrlRule, validate, deleteUrl);

router.put('/:shortCode', shortUrlRule, urlRule, validate, updateUrl);

router.get('/', getAllUrl);

router.post('/', urlRule, validate, createUrl);

export default router;
