const express = require("express");
const multer = require("multer");
const Propiedad = require("../models/Propiedad");
const fs = require("fs");
const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./uploads/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// POST route for creating a new property
router.post("/", upload.array("propertyImages", 12), async (req, res) => {
  const propiedadData = req.body;
  const files = req.files;

  try {
    const propiedad = new Propiedad({
      ...propiedadData,
      imagenes: files.map((file) => file.filename),
    });

    await propiedad.save();

    res.status(200).json({ message: "Propiedad creada exitosamente", propiedad });
  } catch (error) {
    console.error("Error al crear propiedad:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// GET route for fetching properties by owner ID
router.get("/:propietario", async (req, res) => {
  console.log(`Buscando propiedades del propietario con ID: ${req.params.propietario}`);
  try {
    const propiedades = await Propiedad.find({ propietario: req.params.propietario });
    return res.status(200).json(propiedades);
  } catch (error) {
    console.error("Error al buscar propiedades:", error.message);
    return res.status(500).json({ error: error.message });
  }
});

// GET route for fetching all properties except those of the specified owner
router.get("/exclude/:propietario", async (req, res) => {
  console.log(`Buscando todas las propiedades excepto las del propietario con ID: ${req.params.propietario}`);
  try {
    const propiedades = await Propiedad.find({ propietario: { $ne: req.params.propietario } });
    return res.status(200).json(propiedades);
  } catch (error) {
    console.error("Error al buscar propiedades:", error.message);
    return res.status(500).json({ error: error.message });
  }
});

// PUT route for updating a property
router.put("/:_id", upload.none(), async (req, res) => {
  const propiedadData = req.body;
  try {
    const propiedad = await Propiedad.findById(req.params._id); 
    if (!propiedad) {
      return res.status(404).json({ message: "Propiedad no encontrada" });
    }

    console.log('Datos recibidos para actualizar:', propiedadData); // Log para verificar los datos

    Object.keys(propiedadData).forEach(key => {
      if (key !== 'imagenes') {
        propiedad[key] = propiedadData[key];
      }
    });

    await propiedad.save();

    res.status(200).json({ message: "Propiedad actualizada exitosamente", propiedad });
  } catch (error) {
    console.error("Error al actualizar propiedad:", error.message);
    res.status(400).json({ error: error.message });
  }
});

// DELETE route for deleting a property
router.delete("/:_id", async (req, res) => {
  try {
    const propiedad = await Propiedad.findById(req.params._id);

    if (!propiedad) {
      return res.status(404).json({ message: "Propiedad no encontrada" });
    }
    await propiedad.remove();
    res.status(200).json({ message: "Propiedad eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar propiedad:", error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
