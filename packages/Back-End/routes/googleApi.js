const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

/**
 * @openapi
 * /api/v1/google/autocomplete:
 *   get:
 *     tags:
 *       - Autocomplete
 *     summary: Autocompleta lugares usando la API de Google Places
 *     description: Obtiene sugerencias de autocompletado de lugares a partir de una entrada de texto
 *     parameters:
 *       - name: input
 *         in: query
 *         required: true
 *         description: Texto de entrada para autocompletar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa con sugerencias de autocompletado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 predictions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                       place_id:
 *                         type: string
 *       400:
 *         description: Error en la solicitud debido a parámetros faltantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Error al obtener datos de la API de Google
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get("/autocomplete", async (req, res) => {
  const { input } = req.query;

  if (!input) {
    return res.status(400).json({ error: "Input is required" });
  }

  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json",
      {
        params: {
          input,
          key: process.env.GOOGLE_API_KEY, // Asegúrate de tener esta clave en tu archivo .env
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Google API" });
  }
});

module.exports = router;
