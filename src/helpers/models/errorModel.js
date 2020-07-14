const CENSORSHIP = require('../../helpers/enum');

const MovieErrors = {
  MovieNotFound: {
    statusCode: 404,
    data: {
      errors: [
        {
          code: "404",
          message: "Sorry, movie not found.",
        },
      ],
    },
  },
  MoviesNotCreated: {
    statusCode: 404,
    data: {
      errors: [
        {
          code: "404",
          message: "Sorry, there are no movies createad at the moment.",
        },
      ],
    },
  },
  CreationFailed: {
    statusCode: 500,
    data: {
      errors: [
        {
          code: "500",
          message: "Failed to create the movie",
        },
      ],
    },
  },
  CensorshipError: {
    statusCode: 500,
    data: {
      errors: [
        {
          code: "500",
          message: `There was a problem with your search. The censorship level must be: ${CENSORSHIP.CENSORED} or ${CENSORSHIP.UNCENSORED}. You tried to search for: `
        },
      ],
    },
  },
  InvalidId: {
    statusCode: 400,
    data: {
      errors: [
        {
          code: "400",
          message: "ID is invalid;"
        },
      ],
    },
  }
};

module.exports = MovieErrors;
