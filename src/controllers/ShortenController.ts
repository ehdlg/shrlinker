import { RequestHandler } from 'express';
import { get } from '../models/Shorten';
import HttpError from '../errors/HttpError';

export const getUrl: RequestHandler = (req, res, next) => {
  const { shortCode } = req.params;
  try {
    const url = get(shortCode);

    if (url == null) throw new HttpError({ status: 404, message: 'URL not found' });

    return res.json(url);
  } catch (error) {
    next(error);
  }
};
