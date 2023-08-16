import { Asset } from "../entities/asset.entity";

export interface CreateAsset extends Pick<Asset, "name" | "type"> {}
