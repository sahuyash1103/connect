import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import { createServer } from "http";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";

import { PORT, MONGO_URI } from "./configs/env";
import { logger, httpLogger } from "./configs/logger";

const app = express();

const server = createServer(app);

app.use(httpLogger);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

(async () => {
  try {
    logger.config("secret");
    logger.secret(`MONGO_URI: ${MONGO_URI}`);

    await mongoose.connect(MONGO_URI);

    logger.info("Connected to MongoDB");

    server.listen(PORT, () => {
      return logger.info(`Express is listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    logger.error(err);
  }
})();
