/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {connection} from '../logic/LogicaRegistro.jsx'
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = 'libsql://content-starwoman-pacoocabreraa00.turso.io'; // Ruta a tu base de datos SQLite
 
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error al abrir la base de datos', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite');
    // Crear tabla de usuarios si no existe
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      apellido TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      nacionalidad TEXT NOT NULL
    )`);
  }
});
 
module.exports = db;