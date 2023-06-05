var jwt = require("jsonwebtoken");
require("dotenv").config();

const movieModel = require("../models/movieModel");

exports.moviesearchlist = async (token, req, res, next) => {
  const name = req.params.name;
  movieModel.find({title: {$regex : name}})
  .then((data)=>{
    console.log(data)
    res.status(200).send(data)
  })
}

exports.movielist = async (token, req, res, next) => {
    const movieGenres = await movieModel.find().distinct("genres");
    // const movieGenres = [
    //   'Action',    'Adventure',
    //   'Animation', 'Biography',
    //   'Crime',     'Drama',
    //   'Family',    'History',
    //   'Mystery',   'Romance',
    //   'Sci-Fi',    'Thriller',
    //   'War'
    // ]
    var obj = [];
    for (let i = 0; i < movieGenres.length; i++) {
      const movielist = await movieModel
        .find({ genres: movieGenres[i] })
        .select("-_id director imdb_rating length poster title")
        //.sort("imdb_rating")
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