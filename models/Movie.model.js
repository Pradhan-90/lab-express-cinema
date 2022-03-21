const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
  },
  stars: {
    type: [String],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  showTime: {
    type: [String],
  },
});

const Movie = mongoose.model("Movie", movieSchema, "movies");

module.exports = Movie;
