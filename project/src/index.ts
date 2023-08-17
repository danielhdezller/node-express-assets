"use strict";
import cors from "cors";
import myDataSource from "./app-data-source";
import app from "./app";
import dotenv from "dotenv";

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.info("Data Source has been initialized.");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

dotenv.config();
const PORT = process.env.APP_PORT ? +process.env.APP_PORT : 3000;
const HOST = process.env.APP_HOST ? process.env.APP_HOST : "localhost";

app.use(cors());

app.listen(PORT, HOST, () => {
  console.info(`Running on http://${HOST}:${PORT}`);
});
