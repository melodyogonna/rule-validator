const express = require("express");
const { validateRuleService } = require("../services/validator.service");

/** Controller to return my personal informations when home route is visited
 * @param {express.Request} request - Express request object
 * @param {express.Response} response - Express response object
 */
function validateRule(request, response) {
  const { rule, data } = request.body;

  const responseData = validateRuleService(rule, data);
  return response.status(200).json(responseData);
}

module.exports = {
  validateRule,
};
