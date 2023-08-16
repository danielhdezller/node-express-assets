import express from "express";
import urlsRouter from "./routes/assets.route";
import myDataSource from "./app-data-source";
import { swaggerAppBootstrap } from "./swagger.bootstrap";

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.info("Data Source has been initialized.");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());

app.use("/assets", urlsRouter);
swaggerAppBootstrap(app);

export default app;
