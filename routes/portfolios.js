const express = require("express");
const router = express.Router();

const { checkJwt } = require("../controller/auth");
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controller/portfolios");

router.get("", getPortfolios);
router.get("/:id", getPortfolioById);

// create middleware to check for admin rights !
router.post("", checkJwt, createPortfolio);
router.patch("/:id", checkJwt, updatePortfolio);
router.delete('/:id', checkJwt, deletePortfolio)
module.exports = router;
