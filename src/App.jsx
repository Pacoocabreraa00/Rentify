import Navbar from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import NotFound from "./components/templates/NotFound";
import Home from "./components/Home"; // Asumiendo que tienes un componente Home
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para manejar páginas no encontradas */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
