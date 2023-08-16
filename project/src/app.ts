import express from "express";
import urlsRouter from "./routes/assets";

const app = express();
app.use(express.json());
app.use("/assets", urlsRouter);

export default app;
