const express = require('express');

/** error handler for missing fields
 *@param {express.Error} error
 *@param {express.Request} request
 *@param {express.Response} response
 *@param {express.NextFunction} next
 */

function missingFieldHandler(error, request, response, next) {
  if (error.cause === 'missingfield') {
    const message = error.message;
    return response.status(400).json({ message, status: error, data: null });
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
    return response.status(400).json({ message, status: error, data: null });
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

function tooDeepHandler(error, request, response, next) {
  if (error.cause === 'deepnesting') {
    console.log(error);
    const message = error.message;
    return response.status(400).json({ message, status: error, data: null });
  } else {
    next(error);
  }
}

module.exports = { missingFieldHandler, wrongTypeHandler, tooDeepHandler };
