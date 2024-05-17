const mongoose = require("mongoose");

const PropiedadSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  direccion: String,
  ciudad: String,
  codigoPostal: String,
  pais: String,
  descripcion: String,
  habitaciones: Number,
  banos: Number,
  superficie: Number,
  plantas: Number,
  garaje: Boolean,
  piscina: Boolean,
  precioVenta: Number,
  imagenes: [String], // Array de URLs de imágenes
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  estado: String,
  fechaDisponibilidad: Date,
}, { collection: 'propiedades' });

const Propiedad = mongoose.model("Propiedad", PropiedadSchema);
exports.Propiedad = Propiedad;
module.exports.PropiedadSchema = PropiedadSchema;
