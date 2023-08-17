import express from "express";
import { swaggerAppBootstrap } from "./swagger.bootstrap";
import { errorHandler } from "./middleware/error-handler";
import collectionsRouter from "./routes/collections.route";
import assetsRouter from "./routes/assets.route";

const app = express();
app.use(express.json());
app.use(errorHandler);

app.use("/collections", collectionsRouter);
app.use("/assets", assetsRouter);
swaggerAppBootstrap(app);

export default app;
