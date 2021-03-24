const express = require("express");
const router = express.Router();

const { checkJwt } = require("../controller/auth");
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
} = require("../controller/portfolios");

router.get("", getPortfolios);
router.get("/:id", getPortfolioById);

router.post("", checkJwt, createPortfolio);
module.exports = router;
