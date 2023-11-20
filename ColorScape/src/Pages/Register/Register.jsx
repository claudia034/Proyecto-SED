import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  // Estados para almacenar los valores de los campos del formulario
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [guardianNumber, setGuardianNumber] = useState("");

  // Función para manejar el registro
  const handleRegister = async () => {
    // Validar que todos los campos estén llenos
    if (
      !fullName ||
      !phoneNumber ||
      !email ||
      !password ||
      !address ||
      !age ||
      !gender ||
      !emergencyContact ||
      !guardianNumber
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      // Realizar la llamada a la API usando Axios
      const response = await axios.post("http://127.0.0.1:3000/auth/register", {
        fullName,
        phoneNumber,
        email,
        password,
        address,
        age,
        gender,
        emergencyContact,
        guardianNumber,
      });

      if (response.data.success) {
        alert("Registro exitoso");
        navigate("/login");
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      const { response } = error;
      alert(response.data.error);
    }
  };

  return (
    <div className="container separador">
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
                    <h5
                      className="fw-normal mb-2 pb-2"
                      style={{ letterSpacing: "1px" }}
                    >
                      Regístrate
                    </h5>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="name">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="telefono">
                        Numero de telefono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        className="form-control form-control-lg"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="correo">
                        Correo electronico
                      </label>
                      <input
                        type="email"
                        id="correo"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="pass">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        id="pass"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="address">
                        Direccion
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="form-control form-control-lg"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="age">
                        Edad
                      </label>
                      <input
                        type="number"
                        id="age"
                        className="form-control form-control-lg"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="sexo">
                        Sexo
                      </label>
                      <select
                        id="sexo"
                        className="form-select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="" disabled defaultValue="">
                          Seleccione su sexo
                        </option>
                        <option value="femenino">Femenino</option>
                        <option value="masculino">Masculino</option>
                      </select>
                    </div>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="emergency">
                        Contacto de emergencia
                      </label>
                      <input
                        type="tel"
                        id="emergency"
                        className="form-control form-control-lg"
                        value={emergencyContact}
                        onChange={(e) => setEmergencyContact(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="encargado">
                        Numero del encargado
                      </label>
                      <input
                        type="tel"
                        id="encargado"
                        className="form-control form-control-lg"
                        value={guardianNumber}
                        onChange={(e) => setGuardianNumber(e.target.value)}
                      />
                    </div>

                    <div className="pt-1 mb-1">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button"
                        onClick={handleRegister}
                      >
                        Registrarse
                      </button>
                    </div>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Ya posee una cuenta?{" "}
                      <button
                        onClick={() => navigate("/login")}
                        style={{ color: "#00a2ff" }}
                      >
                        Ingresar a tu cuenta
                      </button>
                    </p>
                  </form>
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
    </div>
  );
};

export default RegisterPage;
