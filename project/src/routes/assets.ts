import express, { Request, Response } from "express";
import dataSource from "../app-data-source";
import { Asset } from "../entities/asset.entity";
import { getManager } from "typeorm";

const router = express.Router();

router.get("", (req, res) => {
  try {
    //TODO: validate the id as valid uuid.
    //TODO: get the asset by id.
  } catch (error) {
    console.error("Error encoding URL:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while storing asset." });
  }
  return;
});

router.post("", async (req: Request, res: Response) => {
  try {
    //TODO: validate the body.
    //TODO: save the asset.

    const asset = dataSource.getRepository(Asset).create(req.body);
    const results = await dataSource.getRepository(Asset).save(asset);
    return res.send(results);
  } catch (error) {
    console.error("Error encoding URL:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while storing asset." });
  }
  return;
});

export default router;
