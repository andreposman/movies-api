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
  }
};

module.exports = MovieErrors;
