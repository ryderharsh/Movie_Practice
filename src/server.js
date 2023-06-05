const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const movieModel = require("./models/movieModel");

require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const url = process.env.MONGO_URL;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connect.then(
  (db) => {
    console.log("DB -> connected");
  },
  (err) => {
    console.log("DB Error -> " + err);
  }
);

//define routes
const apiRouter = require("./route/mainroute");
app.use("/api", apiRouter);


app.listen(PORT, console.log(`Server is running on: ${PORT}`));
