const Movie = require("../model/movieModel");
const ErrorModel = require("../../helpers/models/errorModel");
const CENSORSHIP = require('../../helpers/enum');

exports.create = async (req) => {
  const newMovie = { name, release_date, director, cast, censorship_level } = req.body;

  return await Movie.create(newMovie, (err) => { if (err) throw err });
}

exports.findAll = async (req, res) => {
  const allMovies = await Movie.find((err) => { if (err) throw err })

  if (allMovies.length < 1)
    return res.send(ErrorModel.MoviesNotCreated)

  return res.status(200).json(allMovies);
}

exports.search = async (req, res) => {
  const { censorship_level } = req.query;

  if (!this.validateCensorship(censorship_level)) {
    return res.status(ErrorModel.CensorshipError.statusCode).send({
      success: false,
      message: `${ErrorModel.CensorshipError.data.errors[0].message}${censorship_level}.`
    })
  }
  const movieByParam = await Movie.find({ censorship_level })

  if (movieByParam.length < 1)
    return res.send(ErrorModel.MovieNotFound)


  return res.send(movieByParam)
}

exports.delete = async (req, res) => {
  const id = req.params.id

  if (!id)
    return res.send(ErrorModel.InvalidId)

  else {
    const movie = await Movie.findByIdAndDelete(id)

    if (movie.length < 1)
      return res.send(ErrorModel.MovieNotFound)

    return movie
  }
}

exports.validateCensorship = (censorship_level) => {
  switch (censorship_level) {
    case CENSORSHIP.CENSORED:
      return true;
    case CENSORSHIP.UNCENSORED:
      return true;
    default:
      return false;
  }
}
