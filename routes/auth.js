//Para hacer nuestra ruta en un archivo separado
const router = require("express").Router();

const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const userDB = await user.save();
    res.json({
      data: userDB,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

//Sirve para hacer archivos aparte
module.exports = router;
