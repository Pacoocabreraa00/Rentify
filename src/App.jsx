/* eslint-disable no-undef */
import Navbar from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import NotFound from "./components/templates/NotFound";
import Home from "./components/Home"; // Asumiendo que tienes un componente Home
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Ruta para manejar páginas no encontradas */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
// Importa las bibliotecas necesarias y configura la conexión
import { createClient } from "@libsql/client";

const db = createClient({
  url: "libsql://content-starwoman-pacoocabreraa00.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTUyNjYwNDIsImlkIjoiYTVjZGM2ZDUtZWMzNS00MGVhLWEzYTMtMTNiMmJmNGE4YzljIn0.5hA4F0f0tgj0DXXnAcefRI2QL6G4idKKQxR-ufYA0a_7P6X5iWxCfw4F3L1UmsQOhBnX06yHeFj6a7grUeXGCw",
});

// Lógica para crear tablas al iniciar la aplicación
await db.execute(`  
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      apellido TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      nacionalidad TEXT NOT NULL
  )
`);

// Llamar a la función para crear tablas al iniciar la aplicación

// Resto de tu código para configurar Express u otras dependencias

export default App;
