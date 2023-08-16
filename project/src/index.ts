"use strict";
import cors from "cors";
import app from "./app";

const PORT = 3001;
const HOST = "0.0.0.0";

app.use(cors());

app.listen(PORT, HOST, () => {
  console.info(`Running on http://${HOST}:${PORT}`);
});
