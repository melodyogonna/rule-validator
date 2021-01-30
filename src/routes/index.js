const express = require("express");
const { introController } = require("../controllers/intro.controller");
const { validateRule } = require("../controllers/validator.controller");

const router = express.Router();

router.use(express.json());
router.get("", introController);
router.post("/validate-rule", validateRule);

module.exports = router;
