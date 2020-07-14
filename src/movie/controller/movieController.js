const MovieService = require("../services/movieService");
const SuccessModel = require('../../helpers/models/successModel');
const ErrorModel = require('../../helpers/models/errorModel');
const { search } = require("../../routes");


module.exports = {
  async create(req, res) {
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

  async findAll(req, res) {
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

  async search(req,res){
    try {
      return await MovieService.search(req, res)
      
    } catch (error) {
      return res.status(ErrorModel.MovieNotFound.statusCode).send({
        success: false,
        message: ErrorModel.MovieNotFound.data
      })
    }
  },

  async delete(req,res){
    try {
      await MovieService.delete(req, res)
      
      res.send(SuccessModel.DeletedWithSuccess)

    } catch (error) {
      return res.status(ErrorModel.MovieNotFound.statusCode).send({
        success: false,
        message: ErrorModel.MovieNotFound.data
      })
    }
  }

};
