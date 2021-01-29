const express = require("express");
const { returnInformation } = require("../services/intro.service");

/** Controller to return my personal informations when home route is visited
 * @param {express.Request} request - Express request object
 * @param {express.Response} response - Express response object
 */
function introController(request, response) {
  data = returnInformation();
  return response.status(200).json({
    message: "rule validation api",
    status: "success",
    data,
  });
}

module.exports = {
  introController,
};
