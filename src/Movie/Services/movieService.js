const Movie = require("../Model/movieModel");
const ErrorModel = require("../../Helpers/Models/errorModel");
const CENSORSHIP = require('../../Helpers/enum');
const { search } = require("../../routes");

module.exports = {
  async create(req, res) {
    try {
      const newMovie = { name, release_date, director, cast, censorship_level } = req.body;

      const movie = await Movie.create(newMovie, (err) => {
        if (err)
          return res.status(ErrorModel.CreationFailed.statusCode).send({
            success: false,
            message: ErrorModel.CreationFailed.data
          })
      })

      return movie;
    } catch (err) {
      return res.status(ErrorModel.CreationFailed.statusCode).send({
        success: false,
        message: err
      })
    }
  },

  async findAll(req, res) {
    try {
      const allMovies = await Movie.find((err, result) => {
        if (err) {
          console.log(err);
          throw err
        }
      });

      return res.status(200).json(allMovies);

    } catch (error) {
      console.log(error);
      return error;
    }
  },

  async findByName(name) {
    try {
      const moviesByName = await Movie.find({ name });

      return moviesByName
    } catch (err) {
      throw err;
    }
  },

  //TODO fix search, mongo returning empty array
  async search(req, res) {
    try {
      const queryParams = req.query.censorship_level;

      console.log('QueryParam:', queryParams);

      const movieByParam = await Movie.find({ censorship_level: queryParams }, (err, result) => {
        if (err) {
          return res.status(ErrorModel.MovieNotFound.statusCode).send({
            success: false,
            message: err
          })
        }
      })
      console.log(movieByParam);
      return res.send(movieByParam)

    } catch (error) {
      return res.status(ErrorModel.MovieNotFound.statusCode).send({
        success: false,
        message: ErrorModel.MovieNotFound.data
      })
    }
  }


}
