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

const testDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST_TEST,
  port: parseInt(process.env.DB_PORT_TEST || "5431"),
  username: process.env.DB_USER_TEST,
  password: process.env.DB_PASS_TEST,
  database: process.env.DB_NAME_TEST,
  entities: [Asset, Collection, Category],
  migrations: ["dist/migrations/*.js"],
  logging: false,
  synchronize: true,
});

const exportDataSource =
  process.env.APP_MODE === "test" ? testDataSource : dataSource;

export default exportDataSource;
