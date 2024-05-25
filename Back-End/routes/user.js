const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

// Creamos el método post para registrar un usuario
router.post("/", async (req, res) => {
  if (req.body) {
    // Buscamos si existe el correo o el usuario
    let user = await User.findOne({ email: req.body.email });
    let nameexists = await User.findOne({ name: req.body.name });

    // Devolvemos error si ya existe el correo o usuario
    console.log(user);
    console.log(nameexists); 
    if (user || nameexists) {
      return res.status(400).send("Email or username already exists");
    }

    // Devolvemos error si la contraseña no cumple con los requisitos
    if (req.body.password.length < 8) {
      return res
        .status(400)
        .send("Password must be at least 8 characters long");
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!regex.test(req.body.password)) {
      return res
        .status(400)
        .send(
          "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        );
    }

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      nacionalidad: req.body.nacionalidad,
    });

    const result = await user.save();
    const id = result._id;
    res.status(200).send({ user, id});
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
      res.status(400).send("User does not exist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;