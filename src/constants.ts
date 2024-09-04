import path from 'node:path';

export const DB_FILE_PATH = path.resolve(__dirname, '../db/urls.db');

export const SCHEMA_FILE_PATH = path.resolve(__dirname, '../db/schema.sql');

export const MIN_LETTER_CODE = 'a'.charCodeAt(0);
export const MAX_LETTER_CODE = 'z'.charCodeAt(0);
