const supertest = require("supertest");
const app = require("../../src/main");

it("should return relevant personal details", async function () {
  const request = await supertest(app).get("/");

  expect(request.status).toBe(200);
  expect(request.body).toHaveProperty("status", "success");
  expect(request).toMatchSnapshot();
});
