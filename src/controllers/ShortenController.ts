import { RequestHandler } from 'express';
import { get, getAll } from '../models/Shorten';
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

export const getAllUrl: RequestHandler = (_req, res, next) => {
  try {
    const urls = getAll();

    return res.json(urls);
  } catch (error) {
    next(error);
  }
};
