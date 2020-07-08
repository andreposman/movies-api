const Movie = require("../Model/movieModel");
const ErrorModel = require("../../Helpers/Models/errorModel");
const CENSORSHIP = require('../../Helpers/enum');

module.exports = {
  async create(req) {
    try {
        const newMovie = { name, release_date, director, cast, censorship_level } = req.body;
        
        const movie = await Movie.create(newMovie, (err) => { if (err) throw err })

      return movie;
    } catch (err) {
      throw err
    }
  },

  async findAll(req, res) {
    try {
      const allMovies = await Movie.find((err) => { if (err) throw err })

      if (allMovies.length < 1)
        return res.send(ErrorModel.MovieNotFound)

      return res.status(200).json(allMovies);
    } catch (err) {
      throw err
    }
  },

  async search(req, res) {
    try {
      const { censorship_level } = req.query;

      if (!this.validateCensorship(censorship_level)) {
        return res.status(ErrorModel.CensorshipError.statusCode).send({
          success: false,
          message: `${ErrorModel.CensorshipError.data.errors[0].message}${censorship_level}.`
        })
      }
      const movieByParam = await Movie.find({ censorship_level })

      return res.send(movieByParam)

    } catch (err) {
      throw err
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;

      if (id) {
        const movie = await Movie.findByIdAndDelete(id, (err) => {
          if (err)
            res.send(ErrorModel.MovieNotFound)
        })
        return movie
      }
    } catch (err) {
      throw err
    }
  },

  validateCensorship(censorship_level) {
    switch (censorship_level) {
      case CENSORSHIP.CENSORED:
        return true;
      case CENSORSHIP.UNCENSORED:
        return true;
      default:
        return false;
    }
  }
}
