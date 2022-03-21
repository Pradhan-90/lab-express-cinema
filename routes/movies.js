// const { request } = require("http");
// const { hasUncaughtExceptionCaptureCallback } = require("process");
const Movie = require("../models/Movie.model");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const movies = await Movie.find();
  console.log(movies);
  res.render("movies", { movies });
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render("movie", { movie });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
