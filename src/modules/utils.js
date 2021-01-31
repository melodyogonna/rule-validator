const { MissingFieldError, WrongTypeError } = require('../errors');

const RULES = {
  eq: validateEQ,
  gte: validateGTE,
  gt: validateGT,
  neq: validateNEQ,
  contains: validateContains,
};

function verifyPassedParameters(rule, data) {
  if (!rule) {
    throw new MissingFieldError('rule is required.');
  } else if (!data) {
    throw new MissingFieldError('field is required.');
  } else if (typeof rule !== 'object') {
    throw new WrongTypeError('rule should be an object.');
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
  const conditionValue = rule.condition_value;

  if (!data[field]) {
    throw new MissingFieldError(`field ${field} missing from data.`);
  }

  return data[field] >= conditionValue;
}

function validateEQ(rule, data) {
  const field = rule.field;
  const conditionValue = rule.condition_value;

  if (!data[field]) {
    throw new MissingFieldError(`field ${field} missing from data.`);
  }

  return data[field] === conditionValue;
}

function validateGT(rule, data) {
  const field = rule.field;
  const conditionValue = rule.condition_value;

  if (!data[field]) {
    throw new MissingFieldError(`field ${field} missing from data.`);
  }

  return data[field] > conditionValue;
}

function validateNEQ(rule, data) {
  const field = rule.field;
  const conditionValue = rule.condition_value;

  if (!data[field]) {
    throw new MissingFieldError(`field ${field} missing from data.`);
  }

  return data[field] !== conditionValue;
}

function validateContains(rule, data) {
  const field = rule.field;
  const conditionValue = rule.condition_value;

  if (!data[field]) {
    throw new MissingFieldError(`field ${field} missing from data.`);
  }

  return data[field].includes(conditionValue);
}

module.exports = {
  chooseValidator,
  validateGTE,
  verifyPassedParameters,
  validateEQ,
  validateGT,
  validateNEQ,
  validateContains,
};
