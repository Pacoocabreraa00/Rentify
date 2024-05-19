const express = require("express");
const router = express.Router();
const { Propiedad } = require("../models/Propiedad"); // Asegúrate de que la ruta al modelo sea correcta

// Función para validar los campos requeridos
const validarCampos = (body) => {
  const camposRequeridos = [
    "nombre", "tipo", "direccion", "ciudad", "codigoPostal", 
    "pais", "descripcion", "habitaciones", "banos", "superficie", 
    "plantas", "precioVenta", "imagenes", 
    "propietario", "estado", "fechaDisponibilidad"
  ];

  for (let campo of camposRequeridos) {
    if (!body[campo]) {
      return campo;
    }
  }
  return null;
};

// Ruta para registrar una propiedad
router.post("/", async (req, res) => {
  const campoFaltante = validarCampos(req.body);
  
  if (campoFaltante) {
    return res.status(400).json({ error: `El campo ${campoFaltante} es requerido` });
  }

  const propiedad = new Propiedad({
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    direccion: req.body.direccion,
    ciudad: req.body.ciudad,
    codigoPostal: req.body.codigoPostal,
    pais: req.body.pais,
    descripcion: req.body.descripcion,
    habitaciones: req.body.habitaciones,
    banos: req.body.banos,
    superficie: req.body.superficie,
    plantas: req.body.plantas,
    garaje: req.body.garaje,
    piscina: req.body.piscina, 
    precioVenta: req.body.precioVenta,
    imagenes: req.body.imagenes,
    propietario: req.body.propietario,
    estado: req.body.estado,
    fechaDisponibilidad: req.body.fechaDisponibilidad,
  });

  try {
    const result = await propiedad.save();
    res.status(200).json('Propiedad registrada correctamente');
  } catch (error) {
    res.status(500).send('Error al registrar la propiedad');
    console.log(error);
  }
});

// Ruta para obtener todas las propiedades por propietario
router.get("/:propietario", async (req, res) => {
  try {
    const { propietario } = req.params;
    const propiedades = await Propiedad.find({ propietario });

    if (propiedades.length > 0) {
      res.status(200).send(propiedades);
    } else {
      res.status(404).send("No se encontraron propiedades para este propietario");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = router;
