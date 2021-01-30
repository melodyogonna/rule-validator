const { chooseValidator, validateGTE } = require("../modules/utils");

/** Function for validating the correct rule
 * @param {object} rule - rule validation is for
 * @param {object} data - data that the rule is validating
 */
function validateRuleService(rule, data) {
  const validatorFunction = chooseValidator(rule.condition);
  return validatorFunction(rule, data);
}

module.exports = { validateRuleService };
