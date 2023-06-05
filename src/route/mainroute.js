const express = require("express");

//router setup
const apiRouter = express.Router();
apiRouter.use(express.json());

//import controllers
const jwtauthController = require("../controllers/jwtauth");
const movieController = require("../controllers/movie");

//to display movielist
apiRouter.get("/movie", (req, res, next) => {
    const token_userid = jwtauthController.verifyToken(req, res, next);
    movieController.movielist(token_userid, req, res, next);
  });

apiRouter.get("/searchmovie/:name", (req, res, next) => {
    const token_userid = jwtauthController.verifyToken(req, res, next);
    movieController.moviesearchlist(token_userid, req, res, next);
  });

  //to create token
apiRouter.get("/token",(req, res, next)=>{
  jwtauthController.getToken(req, res, next).then((data)=>{
    res.send(data)
  })
})


module.exports = apiRouter;
