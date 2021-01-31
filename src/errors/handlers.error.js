const express = require('express');
const { validationFailure } = require('../modules/helperfunctions');

/** error handler for missing fields
 *@param {express.Error} error
 *@param {express.Request} request
 *@param {express.Response} response
 *@param {express.NextFunction} next
 */

function missingFieldHandler(error, request, response, next) {
  if (error.cause === 'missingfield') {
    console.log(error);
    const message = error.message;
    return response.status(400).json({ message, status: 'error', data: null });
  } else {
    next(error);
  }
}

/** error handler for wrong types
 *@param {express.Error} error
 *@param {express.Request} request
 *@param {express.Response} response
 *@param {express.NextFunction} next
 */

function wrongTypeHandler(error, request, response, next) {
  if (error.cause === 'wrongtype') {
    console.log(error);
    const message = error.message;
    return response.status(400).json({ message, status: 'error', data: null });
  } else {
    next(error);
  }
}

/** error handler for deeply nested fields
 *@param {express.Error} error
 *@param {express.Request} request
 *@param {express.Response} response
 *@param {express.NextFunction} next
 */

function tooDeepHandler(error, request, response, next) {
  if (error.cause === 'deepnesting') {
    console.log(error);
    const message = error.message;
    return response.status(400).json({ message, status: 'error', data: null });
  } else {
    next(error);
  }
}

/** error handler for failed validations
 *@param {express.Error} error
 *@param {express.Request} request
 *@param {express.Response} response
 *@param {express.NextFunction} next
 */

function failedValidationHandler(error, request, response, next) {
  if (error.cause === 'failedvalidation') {
    console.log(error);
    const message = error.message;
    data = validationFailure(error.data.rule, error.data.data);
    return response.status(400).json({ message, status: 'error', data });
  } else {
    next(error);
  }
}

module.exports = {
  failedValidationHandler,
  missingFieldHandler,
  wrongTypeHandler,
  tooDeepHandler,
};
