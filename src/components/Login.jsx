import logo from "../assets/logo.png";
import './styles/login.css';
function Login() {
  return (
    <body className="loginBody">   

    <main className="form-signin w-100 m-auto">
      <form>
        <div className="container d-flex justify-content-center">
          <img
            className="mb-4 img-fluid"
            src={logo}
            alt=""
            width="100"
            height="100"
          />
        </div>
        <h1 className="h3 mb-3 fw-normal text-white">Iniciar sesión</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Correo electronico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label text-white" htmlFor="flexCheckDefault">
            Recuerdame
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Iniciar sesión
        </button>
      </form>
    </main>
    </body>
  );}
  export default Login