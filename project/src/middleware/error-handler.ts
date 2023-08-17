import { Request, Response, NextFunction } from "express";
import { ApplicationError, ClientError } from "../errors/errors";
import { validationResult } from "express-validator";

/**
 * To handle general errors from the application at high level.
 *
 * @export
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {*}
 */
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

/**
 * To validate at the request the body, param, etc. and return the error to the client.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {*}
 */
export function validateReq(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}
