import { HttpErrorOptions } from '../types';

export default class HttpError extends Error {
  readonly status: number;
  constructor({ status, message }: HttpErrorOptions) {
    super(message);
    this.status = status;
  }
}
