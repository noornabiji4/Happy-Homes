const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema({
  price: Number,
  picture: String,
  city: String,
  address: String,
  latitude: Number,
  longitude: Number,
  bedrooms: Number,
  bathrooms: Number,
  carspaces: Number
});

const Pg = mongoose.model("Pg", pgSchema);

module.exports = Pg;
