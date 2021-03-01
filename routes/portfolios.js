const express = require("express");
const router = express.Router();
const { getPortfolios } = require("../controller/portfolios");

router.get("", getPortfolios);

module.exports = router;
