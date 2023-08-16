import { Request, Response, NextFunction } from "express";
import { ApplicationError, ClientError } from "../errors/errors";
import { validationResult } from "express-validator";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApplicationError) {
    return res.status(500).json({ error: "Internal server error" });
  } else if (error instanceof ClientError) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(500).json({ error: "Internal server error" });
}

export function validateReq(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}
