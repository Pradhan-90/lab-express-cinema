// const { request } = require("http");
// const { hasUncaughtExceptionCaptureCallback } = require("process");
const Movie = require("../models/Movie.model");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const movies = await Movie.find();
  console.log(movies);
  res.render("movies", { movies });
});

module.exports = router;
