import { URL } from '../types';
import db from '../db';
import { generateShortCode } from '../utils';

export const getAll = () => {
  const query = 'SELECT * FROM urls';

  const result = db.prepare(query).all() as URL[];

  return result;
};

export const getByCode = (shortCode: string) => {
  const query = `SELECT id, url, short_code as shortCode, created_at as createdAt, updated_at as updatedAt 
                 FROM urls 
                 WHERE short_code = ?`;

  const result = db.prepare(query).get(shortCode) as URL;

  return result || null;
};

export const getByUrl = (url: string) => {
  const query = `SELECT id, url, short_code as shortCode, created_at as createdAt, updated_at as updatedAt 
                 FROM urls 
                 WHERE url = ?`;

  const result = db.prepare(query).get(url);

  return result;
};

export const getStatsByCode = (shortCode: string) => {
  const query = `SELECT id, url, short_code as shortCode, created_at as createdAt, 
                        updated_at as updatedAt, access_count as accessCount 
                 FROM urls 
                 WHERE short_code = ?`;

  const result = db.prepare(query).get(shortCode) as URL;

  return result || null;
};

const getById = (id: number) => {
  const query = 'SELECT * FROM urls WHERE id = ?';

  const result = db.prepare(query).get(id) as URL;

  return result || null;
};

export const create = (url: string) => {
  const query = 'INSERT INTO urls(url, short_code) VALUES (?, ?)';
  const shortCode = generateShortCode();

  const insert = db.prepare(query).run(url, shortCode);

  const { lastInsertRowid: id } = insert;

  const result = getById(id as number);

  return result;
};

export const deleteByCode = (shortCode: string) => {
  const query = 'DELETE FROM urls WHERE short_code = ?';

  const result = db.prepare(query).run(shortCode);

  return result.changes;
};

export const update = (shortCode: string, newUrl: string) => {
  const query = 'UPDATE urls SET url = ?, updated_at = CURRENT_TIMESTAMP WHERE short_code = ?';

  const result = db.prepare(query).run(newUrl, shortCode);

  return result.changes;
};

export const incrementAccessCount = (shortCode: string) => {
  const query = 'UPDATE urls SET access_count = access_count + 1 WHERE short_code = ?';

  const result = db.prepare(query).run(shortCode);

  return result.changes;
};
