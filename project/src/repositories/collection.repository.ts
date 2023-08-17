import { Repository } from "typeorm";
import dataSource from "../app-data-source";
import { Collection } from "../entities/collection.entity";

export const CollectionRepository: Repository<Collection> =
  dataSource.getRepository(Collection);
