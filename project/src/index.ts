"use strict";
import express from "express";
import cors from "cors";
import { getDbClient } from "../getDbClient";
import app from "./app";

const PORT = 3001;
const HOST = "0.0.0.0";

const client = getDbClient();

app.use(cors());

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
  console.log(`Connected to database "${client.database}"`);
});
