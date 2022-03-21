const express = require("express");
const async = require("hbs/lib/async");
const router = express.Router();

/* GET home page */
router.get("/", async (req, res, next) => {
  const movies = await Movie.find;
  res.render("movies", { movies });
});

module.exports = router;
