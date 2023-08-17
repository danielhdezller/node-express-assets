import request from "supertest";
import app from "../src/app";

describe("E2E test for the Assets endpoints.", () => {
  let server: any;
  beforeAll(async () => {
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });

  test("Assets should return STATUS 400 if no body.", async () => {
    const res = await request(app).post("/assets");
    expect(res.status).toBe(400);
  });

  //TODO: SHOULD return STATUS 400 if no body. 201 WITH A valid body.
  //TODO: GET ALL ASSETS.
  //TODO: GET ASSET BY ID.
  //TODO: DELETE ASSET.
});
