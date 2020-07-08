const CENSORSHIP = require('../../Helpers/enum');

const MovieErrors = {
  MovieNotFound: {
    statusCode: 404,
    data: {
      errors: [
        {
          code: "404",
          message: "Movie not found.",
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
  WrongRequest: {
    statusCode: 500,
    data: {
      errors: [
        {
          code: "500",
          message: "wrong request"
        },
      ],
    },
  }
};

module.exports = MovieErrors;
