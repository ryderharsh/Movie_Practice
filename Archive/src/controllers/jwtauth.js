var jwt = require("jsonwebtoken");
require("dotenv").config();

//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJGU01vdmllczIwMjEiLCJpYXQiOjE2NTg1MTEyMzgsImV4cCI6MTY1OTM3NTIzOH0.cho5fnT1r81265holrf_K0mgPVr-5k12p-DQzHtXc4M

exports.getToken = (req, event) =>
  new Promise((resolve, reject) => {
    resolve(
        jwt.sign({ key: "FSMovies2021" }, process.env.SECRET_KEY, {
          expiresIn: "10d",
        })
      );
  });

exports.verifyToken = (req, res, next) => {
  const verifyToken = () => {
    const parse_auth_header = req.header("authorization");
    if (parse_auth_header) {
      const parse_token = parse_auth_header.split(" ")[1];
        const decodedData = jwt.verify(
        parse_token,
        process.env.SECRET_KEY,
        function (err, decoded) {
          if (err) {
            res.sucessCode = 505;
            res.setHeader("Content-Type", "application/json");
            res.json([{ sucess: false, msg: err.name }]);
          } else {
            if (decoded.key === undefined) {
              res.sucessCode = 400;
              res.setHeader("Content-Type", "application/json");
              res.json([{ sucess: false, msg: "Token Undefined" }]);
            } else {
                console.log(decoded.key)
              return decoded.key;
            }
          }
        }
      );
      return decodedData;
    } else {
      res.sucessCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.json([{ sucess: false, msg: "Token Undefined" }]);
    }
  };

  return verifyToken();
};
