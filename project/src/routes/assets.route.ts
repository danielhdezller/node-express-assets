import express, { Request, Response } from "express";
import {
  createAsset,
  deleteAssetById,
  getAllAssets,
  getAssetById,
} from "../services/asset.service";
import validator from "validator";
import { ClientError } from "../errors/errors";
import { validateRequestBody } from "../middleware/error-handler";
import { body } from "express-validator";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (validator.isUUID(id, 4) === false) {
      throw new ClientError("Not valid id, client id is required.");
    }
    const assets = await getAssetById(id);
    return res.json(assets);
  } catch (error) {
    console.error(`Error getting asset by id: ${id}`);
    return res
      .status(404)
      .json({ error: `Not found asset with id: ${id}. ${error}` });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (validator.isUUID(id, 4) === false) {
      throw new ClientError("Not valid id, client id is required.");
    }
    const assets = await deleteAssetById(id);
    return res.json(assets);
  } catch (error) {
    console.error(`Error deleting asset by id: ${id}`, error);
    return res.status(404).json({ error: `Not found asset with id: ${id}` });
  }
});

router.post(
  "",
  [
    body("name").notEmpty().withMessage("name is required"),
    body("type").notEmpty().withMessage("type is required"),
  ],
  validateRequestBody,
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

router.get("", async (req, res) => {
  try {
    const assets = await getAllAssets();
    return res.json(assets);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default router;
