import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar navbar-dark bg-dark navbar-expand-md px-3">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="" width="50px" height="50px" />
        <img
          src="https://i.ibb.co/M14J6RQ/nombre-YEslogan-W.png"
          alt=""
          width="126px"
          height="50px"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link">
              Following
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/propiedades" className="nav-link">
              Explore
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/chat" className="nav-link">
              Chat
            </Link>
          </li>
        </ul>
        {/* Botones adicionales */}
        <div className="d-flex">
          <Link to="/login">
            <button className="btn btn-outline-light mx-2">Iniciar Sesión</button>
          </Link>
          <Link to="/registro">
            <button className="btn btn-outline-light mx-2">Registrarse</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
