var jwt = require("jsonwebtoken");
require("dotenv").config();

const movieModel = require("../models/movieModel");

exports.movielist = async (token, req, res, next) => {
    const movieGenres = await movieModel.find().distinct("genres");
    var obj = [];
    for (let i = 0; i < movieGenres.length; i++) {
      const movielist = await movieModel
        .find({ genres: movieGenres[i] })
        .select("-_id director imdb_rating length poster title");
      obj.push({
        genres: movieGenres[i],
        movies: movielist,
      })
    }
    if (!obj) {
      res.status(500).json({ success: false });
    } else {
      res.send(obj);
    }
}