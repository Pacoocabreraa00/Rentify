// routes/googleApi.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

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
