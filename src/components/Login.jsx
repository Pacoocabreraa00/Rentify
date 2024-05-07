import './styles/login.css';
import ImagenLogo from './templates/small_components/ImagenLogo';
function Login() {
  return (
    <body className="loginBody">   
    
    <main className="form-signin w-100 m-auto">
      <form>
        
      <ImagenLogo/>
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
        
        <button className="btn btn-primary w-100 pt-2 mt-5" type="submit">
          Iniciar sesión
        </button>
      </form>
    </main>
    </body>
  );}
  export default Login