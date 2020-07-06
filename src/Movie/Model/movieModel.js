const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    default: "Name not informed",
    required: true,
    unique: true
  },

  release_date: {
    type: Date,
    required: true,
  },

  censorship_level: {
    type: String,
    enum: ["CENSURADO", "SEM_CENSURA"],
    default: "Censorship level not informed",
    required: true,
  },

  director: {
    type: String,
    default: "Director not informed",
    required: true,
  },

  cast: {
    type: [String],
    default: "Cast not informed",
    required: true
  },
});

MovieSchema.statics = {
  valueExists(query){
    return this.findOne(query).then(result => result)
  }
}

module.exports = mongoose.model("Movie", MovieSchema);
