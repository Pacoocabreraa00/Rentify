const express = require('express');
const multer = require('multer');
const Propiedad = require('../models/Propiedad');
const fs = require('fs');
const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './uploads/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST route for creating a new property
router.post('/', upload.array('propertyImages', 12), async (req, res) => {
  const propiedadData = req.body;
  const files = req.files;

  try {
    const propiedad = new Propiedad({
      ...propiedadData,
      imagenes: files.map(file => file.filename)
    });

    await propiedad.save();

    res.status(200).json({ message: 'Propiedad creada exitosamente', propiedad });
  } catch (error) {
    console.error('Error al crear propiedad:', error.message);
    res.status(400).json({ error: error.message });
  }
});

// GET route for fetching properties by owner ID
router.get('/:propietario', async (req, res) => {
  console.log(`Buscando propiedades del propietario con ID: ${req.params.propietario}`); // Log para verificar el ID recibido
  try {
    const propiedades = await Propiedad.find({ propietario: req.params.propietario });
    
    console.log('Propiedades encontradas:', propiedades); // Log si las propiedades se encuentran
    return res.status(200).json(propiedades); // Enviar respuesta y salir de la función
  } catch (error) {
    console.error('Error al buscar propiedades:', error.message);
    return res.status(500).json({ error: error.message }); // Enviar respuesta de error y salir de la función
  }
});

// GET route for fetching all properties except those of the specified owner
router.get('/exclude/:propietario', async (req, res) => {
  console.log(`Buscando todas las propiedades excepto las del propietario con ID: ${req.params.propietario}`);
  try {
    const propiedades = await Propiedad.find({ propietario: { $ne: req.params.propietario } });
    
    console.log('Propiedades encontradas:', propiedades);
    return res.status(200).json(propiedades);
  } catch (error) {
    console.error('Error al buscar propiedades:', error.message);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
