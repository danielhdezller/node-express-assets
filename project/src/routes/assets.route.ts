import express, { Request, Response } from "express";
import {
  createAsset,
  deleteAssetById,
  getAllAssets,
  getAssetById,
} from "../services/asset.service";
import { validateReq } from "../middleware/error-handler";
import { body, param } from "express-validator";

const router = express.Router();

router.get(
  "/:id",
  [param("id").isUUID().withMessage("id must be an UUID")],
  validateReq,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const assets = await getAssetById(id);
      return res.json(assets);
    } catch (error) {
      console.error(`Error getting asset by id: ${id}`);
      return res
        .status(404)
        .json({ error: `Not found asset with id: ${id}. ${error}` });
    }
  }
);

router.delete(
  "/:id",
  [param("id").isUUID().withMessage("id must be an UUID")],
  validateReq,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const assets = await deleteAssetById(id);
      return res.json(assets);
    } catch (error) {
      console.error(`Error deleting asset by id: ${id}`, error);
      return res.status(404).json({ error: `Not found asset with id: ${id}` });
    }
  }
);

router.post(
  "",
  [
    body("name").notEmpty().withMessage("name is required"),
    body("type").notEmpty().withMessage("type is required"),
  ],
  validateReq,
  async (req: Request, res: Response) => {
    try {
      const asset = await createAsset(req.body);
      return res.send(asset);
    } catch (error) {
      console.error("An error occurred while storing Asset:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while storing Asset." });
    }
  }
);

router.get("", async (_req: Request, res: Response) => {
  try {
    const assets = await getAllAssets();
    return res.json(assets);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default router;
