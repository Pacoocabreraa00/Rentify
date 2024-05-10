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
app.post( (req, res) => {

  const { nombre, apellido, email, password, nacionalidad } = req.body;

  if (res.status === 200) {
    console.log("Datos enviados correctamente");
    let Json = JSON.parse(response.config.data);
    console.log(Json.nombre);

    
    // Aquí podrías redirigir a una página de éxito o realizar otras acciones necesarias
  } else {
    console.error("Error al enviar datos");
  }

  
});
 
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});