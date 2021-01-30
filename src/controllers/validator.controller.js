const express = require("express");

/** Controller to return my personal informations when home route is visited
 * @param {express.Request} request - Express request object
 * @param {express.Response} response - Express response object
 */
function validateRule(request, response) {
  const { rule, data } = request.body;
  return;
}

module.exports = {
  validateRule,
};
