const { chooseValidator, verifyPassedParameters } = require('../modules/utils');
const { validationSuccess } = require('../modules/helperfunctions');
const { FailedValidationError } = require('../errors');

/** Function for validating the correct rule
 * @param {object} rule - rule validation is for
 * @param {object} data - data that the rule is validating
 */
function validateRuleService(rule, data) {
  verifyPassedParameters(rule, data);
  const validatorFunction = chooseValidator(rule.condition);

  if (!validatorFunction(rule, data)) {
    throw new FailedValidationError(
      { rule, data },
      `Field ${rule.field} failed validation`
    );
  }
  return validationSuccess(rule, data);
}

module.exports = { validateRuleService };
