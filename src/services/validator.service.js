const RULES = {
  gte: validateGTE,
};

function chooseValidator(condition) {
  return RULES[condition];
}

function validateGTE(rule, data) {
  const field = rule.field;
  const conditionValue = rule.conditionValue;

  return data[field] >= conditionValue;
}

/** Function for validating the correct rule
 * @param {object} rule - rule validation is for
 * @param {object} data - data that the rule is validating
 */
function validateRuleService(rule, data) {
  const validatorFunction = chooseValidator(rule.condition);
  validatorFunction(rule, data);
}
