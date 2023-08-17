import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Asset } from "./entities/asset.entity";
import { Collection } from "./entities/collection.entity";
import { Category } from "./entities/category.entity";
dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Asset, Collection, Category],
  migrations: ["dist/migrations/*.js"],
  logging: false,
  synchronize: false,
});

export default dataSource;
