const { chooseValidator, validateGTE } = require("../../src/modules/utils");
const { rule, data } = require("../dummy/data");

describe("test that utility functions work correctly", function () {
  test("validator function is choosed correctly", () => {
    expect(chooseValidator("gte")).toBe(validateGTE);
  });

  test("GTE validator works correctly", () => {
    expect(validateGTE(rule, data)).toBe(false);
  });
});
