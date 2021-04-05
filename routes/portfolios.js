const express = require("express");
const router = express.Router();

const { checkJwt } = require("../controller/auth");
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
} = require("../controller/portfolios");

router.get("", getPortfolios);
router.get("/:id", getPortfolioById);

// create middleware to check for admin rights !
router.post("", checkJwt, createPortfolio);
router.patch("/:id", checkJwt, updatePortfolio);
module.exports = router;
