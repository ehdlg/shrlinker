import Database from 'better-sqlite3';
import { DB_FILE_PATH, SCHEMA_FILE_PATH } from '../constants';
import { readFile } from 'fs/promises';

const db = new Database(DB_FILE_PATH);

(async () => {
  try {
    const schemaQuery = await readFile(SCHEMA_FILE_PATH, 'utf-8');

    db.exec(schemaQuery);
  } catch (_error) {
    console.error('There was an error trying to create the database table');
  }
})();

export default db;
