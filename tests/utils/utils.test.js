const {
  chooseValidator,
  validateGTE,
  validateContains,
  validateEQ,
  validateGT,
  validateNEQ,
} = require('../../src/modules/utils');
const { GTEData } = require('../dummy/data');

describe('test that utility functions work correctly', function () {
  test('validator function is choosed correctly', () => {
    expect(chooseValidator('gte')).toBe(validateGTE);
    expect(chooseValidator('gt')).toBe(validateGT);
    expect(chooseValidator('neq')).toBe(validateNEQ);
    expect(chooseValidator('eq')).toBe(validateEQ);
    expect(chooseValidator('contains')).toBe(validateContains);
  });

  test('GTE validator works correctly', () => {
    const { rule: incorrectRule, data: incorrectData } = GTEData(false);
    const { rule: correctRule, data: correctData } = GTEData();
    expect(validateGTE(incorrectRule, incorrectData)).toBe(false);
    expect(validateGTE(correctRule, correctData)).toBe(true);
  });
});
