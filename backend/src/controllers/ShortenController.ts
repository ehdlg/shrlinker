import { RequestHandler } from 'express';
import {
  getByCode,
  getAll,
  create,
  getByUrl,
  deleteByCode,
  update,
  getStatsByCode,
} from '../models/Shorten';
import HttpError from '../errors/HttpError';

export const getUrl: RequestHandler = (req, res, next) => {
  const { shortCode } = req.params;
  try {
    const url = getByCode(shortCode);

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

export const getStats: RequestHandler = (req, res, next) => {
  const { shortCode } = req.params;

  try {
    const url = getStatsByCode(shortCode);

    if (url == null) throw new HttpError({ status: 404, message: 'URL not found' });

    return res.json(url);
  } catch (error) {
    next(error);
  }
};

export const createUrl: RequestHandler = (req, res, next) => {
  try {
    const { url } = req.body;

    const existingUrl = getByUrl(url);

    const isUrlDuplicate = null != existingUrl;

    if (isUrlDuplicate) return res.status(200).json(existingUrl);

    const newUrl = create(url);

    return res.status(201).json(newUrl);
  } catch (error) {
    next(error);
  }
};

export const deleteUrl: RequestHandler = (req, res, next) => {
  const { shortCode } = req.params;

  try {
    const shortCodeExists = null != getByCode(shortCode);

    if (!shortCodeExists) throw new HttpError({ status: 404, message: 'URL not found' });

    deleteByCode(shortCode);

    return res.status(204).json();
  } catch (error) {
    next(error);
  }
};

export const updateUrl: RequestHandler = (req, res, next) => {
  const { shortCode } = req.params;
  const { url } = req.body;

  try {
    const urlToUpdate = getByCode(shortCode);

    if (null == urlToUpdate) throw new HttpError({ status: 404, message: 'Short URL not found' });
    if (urlToUpdate.url === url) throw new HttpError({ status: 400, message: 'Same URL' });

    const existingUrl = null != getByUrl(url);

    if (existingUrl)
      throw new HttpError({
        status: 409,
        message: 'A resource with the provided URL already exists',
      });

    update(shortCode, url);

    const updatedUrl = getByCode(shortCode);

    return res.json(updatedUrl);
  } catch (error) {
    next(error);
  }
};
