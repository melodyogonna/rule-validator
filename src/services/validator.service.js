const { chooseValidator, verifyPassedParameters } = require('../modules/utils');
const {
  validationFailure,
  validationSuccess,
} = require('../modules/helperfunctions');

/** Function for validating the correct rule
 * @param {object} rule - rule validation is for
 * @param {object} data - data that the rule is validating
 */
function validateRuleService(rule, data) {
  verifyPassedParameters(rule, data);
  const validatorFunction = chooseValidator(rule.condition);

  if (validatorFunction(rule, data)) {
    return validationSuccess(rule);
  }
  return validationFailure(rule);
}

module.exports = { validateRuleService };
