const express = require("express");

//router setup
const apiRouter = express.Router();
apiRouter.use(express.json());

//import controllers
const jwtauthController = require("../controllers/jwtauth");
const movieController = require("../controllers/movie");

//for create question
apiRouter.get("/movie", (req, res, next) => {
    const token_userid = jwtauthController.verifyToken(req, res, next);
    movieController.movielist(token_userid, req, res, next);
  });

module.exports = apiRouter;
