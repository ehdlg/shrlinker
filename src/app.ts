import express from 'express';
import 'dotenv/config';
import { handleError, notFound } from './middlewares';

const app = express();
const { PORT } = process.env;

app.use(notFound);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
