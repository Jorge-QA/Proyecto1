const router = require("express").Router();
//Para usar la encriptación
const bcrypt = require("bcrypt");

//para hacer uso del esquema del usuario
const User = require("../models/userModel");

//para utilizar la dependencia jwt.
const jwt = require("jsonwebtoken");

router.get("/users", (req, res) => {
  // if an specific user is required
  if (req.query && req.query.first_name) {
    // if (req.query && req.query.id) {  (traerlo por nombre)
    User.findOne({ first_name: req.query.first_name }) //   Course.findById(req.query.id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(404);
        console.log("error while queryting the user", err);
        res.json({ error: "User doesnt exist" });
      });
  } else if (req.query.sort === "asc") {
    User.find()
      .then((users) => {
        users = users.sort((a, b) => a.first_name.localeCompare(b.first_name));
        res.json(users);
      })
      .catch((err) => {
        res.status(422);
        res.json({ error: err });
      });
  } else if (req.query.sort === "desc") {
    User.find()
      .then((users) => {
        users = users.sort((a, b) => b.first_name.localeCompare(a.first_name));
        res.json(users);
      })
      .catch((err) => {
        res.status(422);
        res.json({ error: err });
      });
  } else {
    // get all courses
    User.find()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.status(422);
        res.json({ error: err });
      });
  }
});


module.exports = router;
