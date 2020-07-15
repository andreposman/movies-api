const MovieService = require("../services/movieService");
const SuccessModel = require('../../helpers/models/successModel');
const ErrorModel = require('../../helpers/models/errorModel');

exports.create = async (req, res) => {
  try {
    await MovieService.create(req);

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
}

exports.findAll = async (req, res) => {
  try {
    const allMovies = await MovieService.findAll(req, res);

    return allMovies;
  } catch (err) {
    return res.status(ErrorModel.MovieNotFound.statusCode).send({
      success: false,
      message: ErrorModel.MovieNotFound.data
    })
  }
}

exports.search = async (req, res) => {
  try {
    return await MovieService.search(req, res)

  } catch (error) {
    return res.status(ErrorModel.MovieNotFound.statusCode).send({
      success: false,
      message: ErrorModel.MovieNotFound.data
    })
  }
}

exports.delete = async (req, res) => {
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
