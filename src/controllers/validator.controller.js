const express = require("express");
const { validateRuleService } = require("../services/validator.service");

/** Controller to validate fields against passed-in parameters
 * @param {express.Request} request
 * @param {express.Response} response
 */
function validateRule(request, response) {
  const { rule, data } = request.body;

  const responseData = validateRuleService(rule, data);
  return response.status(200).json(responseData);
}

module.exports = {
  validateRule,
};
