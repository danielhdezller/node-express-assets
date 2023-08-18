import { Repository } from "typeorm";
import app from "../src/app";
import main from "../src/index";
import { Collection } from "../src/entities/collection.entity";
import request from "supertest";
import dataSource from "../src/app-data-source";
import { Asset } from "../src/entities/asset.entity";
import { AssetTypeEnum } from "../src/shared/app.enum";

describe("E2E Assets CRUD test.", () => {
  let collectionRepository: Repository<Collection>;
  let collection: Collection;
  let server: any;
  let assetRepository: Repository<Asset>;
  const collectionName = "Pop";
  const assetName = "Madonna";
  let asset: Asset;

  beforeAll(async () => {
    server = await main();
    collectionRepository = dataSource.getRepository(Collection);
    assetRepository = dataSource.getRepository(Asset);

    collection = collectionRepository.create({ name: collectionName });
    collection = await collectionRepository.save(collection);
  });

  afterAll(async () => {
    await assetRepository.delete({ name: assetName });
    await collectionRepository.delete({ name: collectionName });

    await server.close();
    dataSource.destroy();
  });

  it("Should create a asset.", async () => {
    const res = await request(app).post("/assets").send({
      name: assetName,
      type: AssetTypeEnum.IMAGE,
      pathToFile:
        "https://www.lecturas.com/medio/2022/12/01/madonna-joven_06b96f3d_1200x1200.jpeg",
      collectionId: collection.id,
    });
    asset = res.body;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(assetName);
  });

  it("Should get the list of assets.", async () => {
    const res = await request(app).get("/assets");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it("Should get asset by id.", async () => {
    const res = await request(app).get(`/assets/${asset.id}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(assetName);
  });
});
