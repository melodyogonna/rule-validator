class HTTPError extends Error {
  constructor(name, status, ...params) {
    super(...params);
    this.name = name;
    this.status = status;
  }
}

class InvalidFieldError extends HTTPError {}

module.exports = { HTTPError, InvalidFieldError };
