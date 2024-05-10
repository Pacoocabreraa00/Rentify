/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import ImagenLogo from "./templates/small_components/ImagenLogo";
import "./styles/login.css";
import { createClient } from "@libsql/client";

const db = createClient({
  url: "libsql://content-starwoman-pacoocabreraa00.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTUyNjYwNDIsImlkIjoiYTVjZGM2ZDUtZWMzNS00MGVhLWEzYTMtMTNiMmJmNGE4YzljIn0.5hA4F0f0tgj0DXXnAcefRI2QL6G4idKKQxR-ufYA0a_7P6X5iWxCfw4F3L1UmsQOhBnX06yHeFj6a7grUeXGCw",
});

function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    nacionalidad: "espana", // Valor por defecto
  });

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("../../logic/LogicaRegistro.jsx", form);
    console.log(response);
    const Json = JSON.parse(response.config.data);
    try {
      const insertQuery = `INSERT INTO users (nombre, apellido, email, password, nacionalidad) VALUES (?, ?, ?, ?, ?)`;
      await db.query(
        insertQuery,
        [Json.nombre, Json.apellido, Json.email, Json.password, Json.nacionalidad],
        (err, result) => {
          if (err) throw err;
          if (result.affectedRows === 1) {
            console.log("Datos insertados correctamente");
          }
          console.log("Datos insertados correctamente");
          //res.send('Datos insertados correctamente');
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="loginBody form-signin w-100 m-auto ">
      <form onSubmit={handleSubmit}>
        <ImagenLogo />
        <h1 className="h3 mb-3 fw-normal text-white">Regístrate</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            placeholder="Apellidos"
            value={form.apellido}
            onChange={handleChange}
          />
          <label htmlFor="apellido">Apellidos</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Correo electronico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <div className="form-floating">
          <select
            id="nacionalidad"
            name="nacionalidad"
            className="form-select"
            value={form.nacionalidad}
            onChange={handleChange}
          >
            <option value="espana">España</option>
            <option value="alemania">Alemania</option>
            <option value="francia">Francia</option>
            <option value="italia">Italia</option>
            <option value="bélgica">Bélgica</option>
            <option value="bulgaria">Bulgaria</option>
            <option value="chipre">Chipre</option>
            <option value="croatia">Croacia</option>
            <option value="dinamarca">Dinamarca</option>
            <option value="eslovaquia">Eslovaquia</option>
            <option value="eslovenia">Eslovenia</option>
            <option value="estonio">Estonia</option>
            <option value="finlandia">Finlandia</option>
            <option value="grecia">Grecia</option>
            <option value="hungría">Hungría</option>
            <option value="irlanda">Irlanda</option>
            <option value="letonia">Letonia</option>
            <option value="liechtenstein">Liechtenstein</option>
            <option value="lituania">Lituania</option>
            <option value="luxemburgo">Luxemburgo</option>
            <option value="malta">Malta</option>
            <option value="países bajos">Países Bajos</option>
            <option value="polonia">Polonia</option>
            <option value="portugal">Portugal</option>
            <option value="reino unido">Reino Unido</option>
            <option value="rumania">Rumanía</option>
            <option value="slovaquia">Eslovaquia</option>
            <option value="eslovenia">Eslovenia</option>
            <option value="suiza">Suiza</option>
          </select>
          <label htmlFor="nacionalidad">Nacionalidad</label>
        </div>
        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
          Registrarse{" "}
        </button>
      </form>
    </main>
  );
}

export default Formulario;
