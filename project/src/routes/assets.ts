import express, { Request, Response } from "express";
import dataSource from "../app-data-source";
import { Asset } from "../entities/asset.entity";
import { getManager } from "typeorm";
import { AssetRepository } from "../repositories/asset.repository";
import { createAsset, getAssetById } from "../services/asset.service";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    //TODO: validate the id as valid uuid.
    const { id } = req.params;
    const assets = await getAssetById(id);
    return res.json(assets);
  } catch (error) {
    console.error("Error encoding URL:", error);
    return res
      .status(404)
      .json({ error: `Not found asset with id: ${req.params.id}` });
  }
  return;
});

router.post("", async (req: Request, res: Response) => {
  try {
    //TODO: validate the body.
    const asset = await createAsset(req.body);
    return res.send(asset);
  } catch (error) {
    console.error("Error encoding URL:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while storing asset." });
  }
});

export default router;
