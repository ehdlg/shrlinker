import { URL } from 'url';
import db from '../db';

export const getAll = () => {
  const query = 'SELECT * FROM urls';

  const result = db.prepare(query).all() as URL[];

  return result;
};

export const get = (shortCode: string) => {
  const query = 'SELECT * FROM urls WHERE short_code = ?';

  const result = db.prepare(query).get(shortCode) as URL;

  return result || null;
};
