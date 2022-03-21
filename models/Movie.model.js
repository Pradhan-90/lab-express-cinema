const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
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

module.exports = mongoose.model("Movie", movieSchema, "movies");
