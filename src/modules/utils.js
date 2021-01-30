const { MissingFieldError, WrongTypeError } = require('../errors');

const RULES = {
  gte: validateGTE,
};

function verifyPassedParameters(rule, data) {
  if (!rule) {
    throw new MissingFieldError({}, 'rule is required');
  } else if (!data) {
    throw new MissingFieldError({}, 'field is required');
  } else if (typeof rule !== 'object') {
    throw new WrongTypeError({}, 'rule should be an object');
  }
}

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
  if (!data[field]) {
    throw new MissingFieldError({}, `field ${field} missing from data`);
  }
  return conditionValue >= data[field];
}

module.exports = {
  chooseValidator,
  validateGTE,
  verifyPassedParameters,
};
