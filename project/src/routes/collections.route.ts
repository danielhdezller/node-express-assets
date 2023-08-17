import express, { Request, Response } from "express";

import { getAllCollections } from "../services/collection.service";

const collectionsRouter = express.Router();

collectionsRouter.get("", async (_req: Request, res: Response) => {
  try {
    const assets = await getAllCollections();
    return res.json(assets);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default collectionsRouter;
