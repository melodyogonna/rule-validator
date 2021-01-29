const express = require("express");
const { introController } = require("../controllers/intro.controller");

const router = express.Router();

router.get("", introController);

module.exports = router;
