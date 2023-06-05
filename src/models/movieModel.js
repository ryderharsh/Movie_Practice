const mongoose = require("mongoose")
const Schema = mongoose.Schema

var movieSchema  = new Schema(
    {
        backdrop: {
            type: String,
            required: true,
            unique: true
        },
        cast: [{type: String}],
        classification: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        genres: [{type: String}],
        id: {
            type: String,
            required: true,
            unique: true
        },
        imdb_rating: {
            type: Number,
            required: true
        },
        length: {
            type: String,
            required: true
        },
        overview: {
            type: String,
            required: true
        },
        poster: {
            type: String,
            required: true
        },
        released_on: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
);

var movieModel = mongoose.model("movie", movieSchema, "movie")
module.exports = movieModel