const mongoose = require("mongoose");
const Portfolio = mongoose.model("Portfolio");

exports.getPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find({}); // fetch all of the documents
  return res.json(portfolios);
};

exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.createPortfolio = async (req, res) => {
  const portfolioData = req.body;
  const portfolio = new Portfolio(portfolioData);
  const userId = req.user.sub;
  portfolio.userId = userId;
  //console.log(portfolio);
  try {
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }

  return res.json({ message: "creating portfolio" });
};

exports.updatePortfolio = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  try {
    const updatedPortflio = await Portfolio.findOneAndUpdate(
      { _id: id },
      body,
      {
        new: true,
        runValidators: true,
      }
    );
    return res.json(updatedPortflio);
  } catch (error) {
    return res.status(422).send(error.message);
  }

  return res.json({ message: "creating portfolio" });
};
