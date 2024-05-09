/* eslint-disable no-undef */

import dotenv from 'dotenv'
import { createClient } from '@libsql/client'


dotenv.config()
const connection = createClient({
  url: "libsql://content-starwoman-pacoocabreraa00.turso.io",
  authToken: process.env.DB_TOKEN
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conexión a la base de datos establecida');
});

// Ruta para manejar las solicitudes POST del formulario
app.post('/formulario', (req, res) => {
  const { campo1, campo2 } = req.body;
  const INSERT_QUERY = `INSERT INTO tabla (campo1, campo2) VALUES (?, ?)`;

  // eslint-disable-next-line no-unused-vars
  connection.query(INSERT_QUERY, [campo1, campo2], (err, result) => {
    if (err) throw err;
    console.log('Datos insertados correctamente');
    res.send('Datos insertados correctamente');
  });
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
