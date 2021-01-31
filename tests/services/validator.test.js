const { FailedValidationError } = require('../../src/errors');
const { validationSuccess } = require('../../src/modules/helperfunctions');
const { validateRuleService } = require('../../src/services/validator.service');
const { GTEData } = require('../dummy/data');

describe('Test suites to test validator service', function () {
  test('validate rule service passes correctly', () => {
    const { rule, data } = GTEData();
    expect(validateRuleService(rule, data)).toEqual(
      validationSuccess(rule, data)
    );
  });

  test('validate rule service throws on failure', () => {
    const { rule, data } = GTEData(false);
    expect(() => validateRuleService(rule, data)).toThrow(
      FailedValidationError
    );
  });
});
