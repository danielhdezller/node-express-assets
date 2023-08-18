import { Repository } from "typeorm";
import app from "../src/app";
import main from "../src/index";
import { Collection } from "../src/entities/collection.entity";
import request from "supertest";
import dataSource from "../src/app-data-source";

describe("E2E Collection test.", () => {
  let collectionRepository: Repository<Collection>;
  let collection: Collection;
  let server: any;

  beforeAll(async () => {
    server = await main();
    collectionRepository = dataSource.getRepository(Collection);
  });

  afterAll(async () => {
    await server.close();
    dataSource.destroy();
  });

  it("Should get the list of collections.", async () => {
    collection = collectionRepository.create({ name: "name" });
    collection = await collectionRepository.save(collection);
    const res = await request(app).get("/collections");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});
