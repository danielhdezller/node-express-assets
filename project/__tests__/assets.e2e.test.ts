import request from "supertest";
import app from "../src/app";
import { Asset } from "../src/entities/asset.entity";

// jest.mock("../src/entities/asset.entity", () => ({
//   Collection: Asset,
// }));

describe("E2E test for the Assets endpoints.", () => {
  // let server: any;
  // beforeAll(async () => {
  //   server = await app.listen(3001);
  // });
  // afterAll(async () => {
  //   await server.close();
  // });
  // test("Assets should return STATUS 400 if no URL.", async () => {
  //   const res = await request(app).post("/assets");
  //   expect(res.status).toBe(400);
  // });
});
