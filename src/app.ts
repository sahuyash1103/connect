import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import express, { NextFunction, Request, Response } from 'express';
import { createServer } from 'http';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import createError from 'http-errors';

import { PORT, MONGO_URI } from './configs/env.config';
import { logger, httpLogger } from './configs/logger.config';
import v1Router from './routes/index.route';
import { HTTP_STATUS } from './utils/constants';
import { sendResponse } from './utils/helper';

const app = express();

const server = createServer(app);

app.use(httpLogger);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  mongoSanitize({
    allowDots: false,
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
      console.warn(`[DryRun] This request[${key}] will be sanitized`, req);
    },
  })
);

app.get('/', (req, res, next) => {
  return sendResponse(res, HTTP_STATUS.OK, {
    success: true,
    message: 'Hello World!',
  });
});

app.use('/api/v1', v1Router);

app.use(function (req, res, next) {
  next(
    createError(HTTP_STATUS.NOT_FOUND, `${req.url} not found on the server.`)
  );
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  return sendResponse(res, err.status || HTTP_STATUS.NOT_FOUND, {
    success: false,
    error: err?.message || err,
  });
});

(async () => {
  try {
    logger.secret(`MONGO_URI: ${MONGO_URI}`);

    await mongoose.connect(MONGO_URI);

    logger.info('Connected to MongoDB');

    server.listen(PORT, () => {
      return logger.info(`server is listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    logger.error(err);
  }
})();
