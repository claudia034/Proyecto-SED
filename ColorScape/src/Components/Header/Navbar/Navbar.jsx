import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCogs,
  faComments,
  faDollarSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      async function validToken() {
        const response = await axios.get("/auth/getrole", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`, // Sustituye "tuToken" con la variable que contiene tu token
          },
        });
        const { user } = response.data;
        console.log("Respuesta del servidor: ", user.rol);
        if (user.rol == -1) {
          logout();
        }
      }
      validToken();
    } else {
      setToken(false);
    }
  }, [localStorage.getItem("token")]);

  return (
    <div className="navbar-area">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                className="image"
                src="assets/img/header/logo/logo.png"
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-scroll-nav="0"
                    aria-current="page"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faHome} /> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-scroll-nav="1"
                    href="#feature-section"
                  >
                    <FontAwesomeIcon icon={faCogs} /> Benefits
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-scroll-nav="2"
                    href="#testimonial-section"
                  >
                    <FontAwesomeIcon icon={faComments} /> Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-scroll-nav="3"
                    href="#pricing-area"
                  >
                    <FontAwesomeIcon icon={faDollarSign} /> Pricing
                  </a>
                </li>
                {token != false ? (
                  <>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        <FontAwesomeIcon icon={faUser} /> Dashboard
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        onClick={() => {
                          navigate("/perfil");
                        }}
                      >
                        <FontAwesomeIcon icon={faUser} /> Perfil
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        onClick={() => {
                          logout();
                        }}
                      >
                        <FontAwesomeIcon icon={faUser} /> Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        <FontAwesomeIcon icon={faUser} /> Login
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
