import { Repository } from "typeorm";
import dataSource from "../app-data-source";
import { Asset } from "../entities/asset.entity";

export const AssetRepository: Repository<Asset> =
  dataSource.getRepository(Asset);
