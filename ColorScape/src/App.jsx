import { useEffect, useState } from "react";
//import "./App.css";
import "./index.css"; // Puedes importar aquí estilos globales de tu aplicación
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import "./assets/css/animate.css";
import "./assets/css/tiny-slider.css";
import "./assets/css/all.css";
import "./assets/css/venobox.css";
import "./assets/css/default.css";
import "./assets/css/style.scss";

// index.js o index.jsx
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index/Index";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";
import Perfil from "./Pages/Perfil/Perfil";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  library.add(fas, fab, far);
  

  return (
    <>
      <Router>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage></LoginPage>} />
            <Route path="/register" element={<RegisterPage></RegisterPage>} />
            <Route path="/perfil" element={<Perfil></Perfil>} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          </Routes>
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
