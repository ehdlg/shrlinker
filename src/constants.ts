import path from 'node:path';

export const DB_FILE_PATH = path.resolve(__dirname, '../db/urls.db');

export const SCHEMA_FILE_PATH = path.resolve(__dirname, '../db/schema.sql');

const FIRST_LETTER = 'A';
const LAST_LETTER = 'z';

export const LETTER_RANGE = LAST_LETTER.charCodeAt(0) - FIRST_LETTER.charCodeAt(0);
