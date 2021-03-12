const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, required: true, maxLength: 128 },
  portfolio: { type: String, required: true, maxlength: 64 },
  portfolioWebsite: { type: String, required: true, maxlength: 128 },
  location: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  createdAt: { type: Date },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
