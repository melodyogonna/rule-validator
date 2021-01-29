const { returnInformation } = require("../../src/services/intro.service");

test("Test wethear intro service returns the correct informations", () => {
  expect(typeof returnInformation()).toBe("object");
  expect(returnInformation()).toHaveProperty("name");
  expect(returnInformation()).toHaveProperty("twitter");
  expect(returnInformation()).toHaveProperty("email");
  expect(returnInformation()).toHaveProperty("github");
});
