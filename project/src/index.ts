"use strict";
import cors from "cors";
import app from "./app";
import dotenv from "dotenv";
import { parse } from "path";

dotenv.config();
const PORT = process.env.APP_PORT ? +process.env.APP_PORT : 3000;
const HOST = process.env.APP_HOST ? process.env.APP_HOST : "localhost";

app.use(cors());

app.listen(PORT, HOST, () => {
  console.info(`Running on http://${HOST}:${PORT}`);
});
