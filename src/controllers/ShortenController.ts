import { RequestHandler } from 'express';
import { getByCode, getAll, create, getByUrl, deleteByCode, update } from '../models/Shorten';
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

export const createUrl: RequestHandler = (req, res, next) => {
  try {
    const { url } = req.body;

    const isUrlDuplicate = null != getByUrl(url);

    if (isUrlDuplicate) throw new HttpError({ status: 409, message: 'URL already exists' });

    const newUrl = create(url);

    return res.status(201).json(newUrl);
  } catch (error) {
    next(error);
  }
};

export const deleteUrl: RequestHandler = (req, res, next) => {
  const { shortCode } = req.params;

  try {
    const exists = null != getByCode(shortCode);

    if (!exists) throw new HttpError({ status: 404, message: 'URL not found' });

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

    update(shortCode, url);

    const updatedUrl = getByCode(shortCode);

    return res.json(updatedUrl);
  } catch (error) {
    next(error);
  }
};
