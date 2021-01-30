const RULES = {
  gte: validateGTE,
};

/** Take a condition and return the correct validator function for the
 * condition
 * @param {string} condition
 */
function chooseValidator(condition) {
  return RULES[condition];
}

function validateGTE(rule, data) {
  const field = rule.field;
  const conditionValue = rule.conditionValue;

  return conditionValue >= data[field];
}

module.exports = {
  chooseValidator,
  validateGTE,
};
