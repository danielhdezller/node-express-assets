import express, { Request, Response } from "express";

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

router.post("", (req: Request, res: Response) => {
  try {
    //TODO: validate the body.
    //TODO: save the asset.
  } catch (error) {
    console.error("Error encoding URL:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while storing asset." });
  }
  return;
});

export default router;
