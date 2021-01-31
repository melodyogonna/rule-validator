class HTTPError extends Error {
  constructor(...params) {
    super(...params);
    this.name = 'HTTPError';
  }
}

class MissingFieldError extends HTTPError {
  constructor(...params) {
    super(...params);
    this.name = 'MissingFieldError';
    this.cause = 'missingfield';
  }
}

class MissingRuleError extends HTTPError {
  constructor(...params) {
    super(...params);
    this.name = 'MissingRuleError';
    this.cause = 'missingrule';
  }
}

class WrongTypeError extends HTTPError {
  constructor(...params) {
    super(...params);
    this.name = 'WrongTypeError';
    this.cause = 'wrongtype';
  }
}

class TooDeeplyNestedError extends HTTPError {
  constructor(...params) {
    super(...params);
    this.name = 'TooDeeplyNestedError';
    this.cause = 'deepnesting';
  }
}

class FailedValidationError extends HTTPError {
  constructor(data, ...params) {
    super(...params);
    this.name = 'FailedValidationError';
    this.cause = 'failedvalidation';
    this.data = data;
  }
}

module.exports = {
  HTTPError,
  MissingFieldError,
  MissingRuleError,
  WrongTypeError,
  TooDeeplyNestedError,
  FailedValidationError,
};
