import express from 'express';
import shortenRoute from './routes/shorten';
import { handleError, notFound } from './middlewares';
import 'dotenv/config';

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use('/shorten', shortenRoute);

app.use(notFound);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
