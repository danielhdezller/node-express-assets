import express from "express";
import myDataSource from "./app-data-source";
import { swaggerAppBootstrap } from "./swagger.bootstrap";
import { errorHandler } from "./middleware/error-handler";
import collectionsRouter from "./routes/collections.route";
import assetsRouter from "./routes/assets.route";

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
app.use(errorHandler);

app.use("/collections", collectionsRouter);
app.use("/assets", assetsRouter);
swaggerAppBootstrap(app);

export default app;
