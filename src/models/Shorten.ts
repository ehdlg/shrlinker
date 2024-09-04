import { URL } from 'url';
import db from '../db';
import { generateShortCode } from '../utils';

export const getAll = () => {
  const query = 'SELECT * FROM urls';

  const result = db.prepare(query).all() as URL[];

  return result;
};

export const getByCode = (shortCode: string) => {
  const query = 'SELECT * FROM urls WHERE short_code = ?';

  const result = db.prepare(query).get(shortCode) as URL;

  return result || null;
};

export const getByUrl = (url: string) => {
  const query = 'SELECT * FROM urls WHERE url = ?';

  const result = db.prepare(query).get(url);

  return result;
};

const getById = (id: number) => {
  const query = 'SELECT * FROM urls WHERE id = ?';

  const result = db.prepare(query).get(id) as URL;

  return result || null;
};
