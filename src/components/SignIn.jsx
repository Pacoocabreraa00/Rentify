import "./styles/login.css";
import logo from "../assets/logo.png";
function SignIn() {
  return (
    <main className="form-signin w-100 m-auto ">
      <form action="PHP\Archivos comunes\controlReg.php" method="POST">
        <div className="container d-flex justify-content-center">
          <img
            className="mb-4 img-fluid"
            src={logo}
            alt=""
            width="100"
            height="100"
          />
        </div>
        <h1 className="h3 mb-3 fw-normal text-white">Regístrate</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
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
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <div className="form-floating">
          <select id="nacionalidad" name="nacionalidad" className="form-select">
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
export default SignIn;