import { RequestHandler } from 'express';
import HttpError from '../errors/HttpError';

export const notFound: RequestHandler = () => {
  throw new HttpError({ status: 404, message: 'Not found' });
};
