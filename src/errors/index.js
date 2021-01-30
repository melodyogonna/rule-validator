class HTTPError extends Error {
  constructor(data, ...params) {
    super(...params);
    this.name = "HTTPError";
    this.data = data;
  }
}

class MissingFieldError extends HTTPError {
  constructor(...params) {
    super(...params);
    this.name = "MissingFieldError";
    this.cause = "missing field";
  }
}

class MissingRuleError extends HTTPError {
  constructor(...params) {
    super(...params);
    this.name = "MissingRuleError";
    this.cause = "missing rule";
  }
}

class WrongTypeError extends HTTPError {
  constructor(...params) {
    super(...params);
    this.name = "WrongTypeError";
    this.cause = "wrong type";
  }
}

module.exports = {
  HTTPError,
  MissingFieldError,
  MissingRuleError,
  WrongTypeError,
};
