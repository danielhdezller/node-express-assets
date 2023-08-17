import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import { Asset } from "./entities/asset.entity";
import { Collection } from "./entities/collection.entity";
import { Category } from "./entities/category.entity";
dotenv.config();

const dataSource: DataSourceOptions = {
  type: "sqlite",
  database: "dist/database.sqlite",
  entities: [Asset, Collection, Category],
  migrations: ["dist/migrations/*.js"],
  logging: true,
  synchronize: true,
};

export default dataSource;
