import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ info: "App is running!" });
});

export default router;
