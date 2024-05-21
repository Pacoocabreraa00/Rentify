const mongoose = require('mongoose');

const PropiedadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  direccion: { type: String, required: true },
  ciudad: { type: String, required: true },
  codigoPostal: { type: String, required: true },
  pais: { type: String, required: true },
  descripcion: { type: String, required: true },
  habitaciones: { type: Number, required: true },
  banos: { type: Number, required: true },
  superficie: { type: Number, required: true },
  plantas: { type: Number, required: true },
  garaje: { type: Boolean, required: true },
  piscina: { type: Boolean, required: true },
  precioVenta: { type: Number, required: true },
  propietario: { type: String, required: true },
  imagenes: { type: [String], required: true },
  estado: { type: String, required: true },
  fechaDisponibilidad: { type: Date, required: true }
});

module.exports = mongoose.model('Propiedad', PropiedadSchema);
