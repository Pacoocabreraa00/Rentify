const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

//post

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