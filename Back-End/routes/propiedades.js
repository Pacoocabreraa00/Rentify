const express = require("express");
const router = express.Router();
const { Propiedad } = require("../models/Propiedad"); // Asegúrate de que la ruta al modelo sea correcta

// Ruta para registrar una propiedad
router.post("/", async (req, res) => {
  // Crear la nueva propiedad
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

  // Guardar la propiedad en la base de datos
  const result = await propiedad.save();
  res.status(200).send(result);
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
