import express, { Request, Response } from "express";

import { getAllCollections } from "../services/collection.service";
import { Collection } from "../entities/collection.entity";

const collectionsRouter = express.Router();

collectionsRouter.get(
  "",
  async (
    _req: Request,
    res: Response
  ): Promise<Response<Collection[] | { error: string }>> => {
    try {
      const collections = await getAllCollections();
      return res.json(collections);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
);

export default collectionsRouter;
