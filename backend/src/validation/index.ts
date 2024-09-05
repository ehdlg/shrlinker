import { body, param } from 'express-validator';
import { SHORT_URL_REGEXP } from '../constants';

export const urlRule = (() => {
  return [
    body('url')
      .exists()
      .withMessage('The `url` property is required')
      .bail()
      .isURL()
      .withMessage('The `url` property must be a valid URL'),
  ];
})();

export const shortUrlRule = (() => {
  return [param('shortCode').matches(SHORT_URL_REGEXP).withMessage('Invalid short URL')];
})();
