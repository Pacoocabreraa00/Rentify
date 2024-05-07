import logo from "../../../assets/logo.png";
function ImagenLogo(){
    return(
        <div className="container d-flex justify-content-center">
          <img
            className="mb-4 img-fluid"
            src={logo}
            alt=""
            width="100"
            height="100"
          />
        </div>
    );
}

export default ImagenLogo;