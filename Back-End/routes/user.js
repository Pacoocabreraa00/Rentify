const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

/**
 * @openapi
 * /api/v1/user/:
 *   post:
 *     tags:
 *       - User
 *     summary: Registra un nuevo usuario
 *     description: Crea una nueva cuenta de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *               nacionalidad:
 *                 type: string
 *                 description: Nacionalidad del usuario
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 nacionalidad:
 *                   type: string
 *                 _id:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post("/", async (req, res) => {
  if (req.body) {
    // Buscamos si existe el correo o el usuario
    let user = await User.findOne({ email: req.body.email });
    let nameexists = await User.findOne({ name: req.body.name });

    // Devolvemos error si ya existe el correo o usuario
    if (user || nameexists) {
      return res.status(400).json({ error: "Email or username already exists" });
    }

    // Devolvemos error si la contraseña no cumple con los requisitos
    if (req.body.password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters long" });
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!regex.test(req.body.password)) {
      return res.status(400).json({
        error: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      });
    }

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      nacionalidad: req.body.nacionalidad,
    });

    const result = await user.save();
    res.status(200).json({ name: user.name, email: user.email, nacionalidad: user.nacionalidad, _id: user._id });
  } else {
    res.status(400).json({ error: "Tienes que poner algo" });
  }
});

/**
 * @openapi
 * /api/v1/user/{email}:
 *   get:
 *     tags:
 *       - User
 *     summary: Obtiene un usuario por su correo electrónico
 *     description: Devuelve los detalles de un usuario dado su correo electrónico
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         description: Correo electrónico del usuario
 *         schema:
 *           type: string
 *           format: email
 *     responses:
 *       200:
 *         description: Detalles del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 nacionalidad:
 *                   type: string
 *                 _id:
 *                   type: string
 *       400:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    let user = await User.findOne({ email: email });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;