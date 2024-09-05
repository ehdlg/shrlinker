import { ErrorRequestHandler, RequestHandler } from 'express';
import HttpError from '../errors/HttpError';
import { validationResult } from 'express-validator';

export const notFound: RequestHandler = () => {
  throw new HttpError({ status: 404, message: 'Not found' });
};

export const handleError: ErrorRequestHandler = (error, _req, res, _next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  return res.status(status).json({ error: message });
};

export const validate: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();

  const errorMessages = errors.array().map((error) => {
    return error.msg;
  });

  return res.status(422).json({ errors: errorMessages });
};
