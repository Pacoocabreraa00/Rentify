const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
//Creamos el método post para registrar un usuario
router.post("/", async (req, res) => {
  //Buscamos si existe el correo o el usuario
  if (req.body) {
    let user = await User.findOne({ email: req.body.email });
    let nameexists = await User.findOne({ name: req.body.name });

    //Devolvemos error si no existe el correo o usuario
    if (user || nameexists)
      return res.status(400).send("Email or username already exists");

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      repeatpassword: req.body.repeatpassword,
    });

    //Devolvemos error si las contraseñas no coinciden
    if (req.body.password !== req.body.repeatpassword) {
      return res.status(400).send("Passwords do not match");
    }

    //Si todo sale bien, guardamos el usuario en la base de datos y construimos el token JWT
    else {
      const result = await user.save();
      const token = "tokendeejemplo";
      res.status(200).send({ token });
    }
  } else {
    res.status(400).send("Tienes que poner algo");
  }
});
router.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    let user = await User.findOne({ email: email });

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send("User does not exists");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
