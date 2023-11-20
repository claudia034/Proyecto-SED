import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const login = () => {
    axios
      .post(
        "http://localhost:3000/auth/login",
        {
          username: document.getElementById("correo").value,
          password: document.getElementById("pass").value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        if (response.data.message === "OK") {
          localStorage.setItem("token", response.data.token);
          navigate("/");
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch((error) => {
        const { response } = error;
        if (response.data.message === "OK") {
          localStorage.setItem("token", response.data.token);
          navigate("/");
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      });
  };

  return (
    <section
      className="vh-100 separador"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-1">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="assets/img/register/moviles.png"
                    alt=""
                    className="image-1 wow fadeInRightBig"
                    data-wow-duration="3s"
                    data-wow-delay="0.5s"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          src="assets/img/header/logo/logo1.png"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Ingresa a tu cuenta
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="correo"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="correo">
                          Correo electrónico
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="pass"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="pass">
                          Contraseña
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={() => {
                            login();
                          }}
                        >
                          Ingresar
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        No tienes cuenta?{" "}
                        <button
                          onClick={() => {
                            navigate("/register");
                          }}
                          style={{ color: "#00a2ff" }}
                        >
                          Regístrate aquí
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-shape-1"></div>
      <div className="header-shape-2">
        <img src="assets/img/header/header-shape-2.svg" alt="" />
      </div>
    </section>
  );
};

export default LoginPage;
