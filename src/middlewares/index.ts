import { ErrorRequestHandler, RequestHandler } from 'express';
import HttpError from '../errors/HttpError';

export const notFound: RequestHandler = () => {
  throw new HttpError({ status: 404, message: 'Not found' });
};

export const handleError: ErrorRequestHandler = (error, _req, res, _next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  return res.status(status).json({ error: message });
};
