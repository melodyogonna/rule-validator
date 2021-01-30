const express = require("express");

/** error handler for missing fields
 *@param {express.Error} error
 *@param {express.Request} request
 *@param {express.Response} response
 *@param {express.NextFunction} next
 */

function missingFieldHandler(error, request, response, next) {
  if (error.cause === "missingfield") {
    const message = `${error.data.field} is required.`;
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
  if (error.cause === "wrongtype") {
    const message = `${error.data.field} should be ${error.data.expectedField}`;
    return response.status(400).json({ message, status: error, data: null });
  } else {
    next(error);
  }
}

module.exports = { missingFieldHandler, wrongTypeHandler };
