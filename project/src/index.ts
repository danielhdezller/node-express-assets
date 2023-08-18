"use strict";
import cors from "cors";
import app from "./app";
import dotenv from "dotenv";
import dataSource from "./app-data-source";
dotenv.config();

export default async function main() {
  let PORT = process.env.APP_PORT ? +process.env.APP_PORT : 3000;
  let HOST = process.env.APP_HOST ? process.env.APP_HOST : "localhost";

  await dataSource
    .initialize()
    .then(() => {
      console.info("Data Source has been initialized.");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
    });

  app.use(cors());

  return app.listen(PORT, HOST, () =>
    console.info(`Running on http://${HOST}:${PORT}`)
  );
}
