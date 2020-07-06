const MovieService = require("../Services/movieService");
const SuccessModel = require('../../Helpers/Models/successModel');
const ErrorModel = require('../../Helpers/Models/errorModel');
const { search } = require("../../routes");


module.exports = {
  async Create(req, res) {
    try {
      const movie = await MovieService.create(req);

      return res.status(SuccessModel.CreatedWithSuccess.statusCode).send({
        success: true,
        message: SuccessModel.CreatedWithSuccess.data
      })
    } catch (err) {
      return res.status(ErrorModel.CreationFailed.statusCode).send({
        success: false,
        message: ErrorModel.CreationFailed.data
      })
    }
  },

  async FindAll(req, res) {
    try {
      const allMovies = await MovieService.findAll(req, res);

      return allMovies;
    } catch (err) {
      return res.status(ErrorModel.MovieNotFound.statusCode).send({
        success: false,
        message: ErrorModel.MovieNotFound.data
      })
    }
  },

  async Search(req,res){
    try {
      const movieSearched = await MovieService.search(req, res)

      return movieSearched
    } catch (error) {
      return res.status(ErrorModel.MovieNotFound.statusCode).send({
        success: false,
        message: ErrorModel.MovieNotFound.data
      })
    }
  }

};
