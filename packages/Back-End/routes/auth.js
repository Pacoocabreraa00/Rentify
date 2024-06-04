const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
/**
 * @openapi
 * /api/v1/auth:
 *   post:
 *     tags:
 *       - User
 *     summary: Inicia sesión con un usuario
 *     description: Loggea a un Usuario y devuelve el token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Devuelve el id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: El id del usuario
 *       400:
 *         description: El usuario no existe o las credenciales son incorrectas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 */


router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    if (user.password !== req.body.password){
      return res.status(400).send("Username or password are not correct");
    }
    res.status(200).send({ id: user._id });
  } else {
    res.status(400).send("User does not exist");
  }
});
module.exports = router;
