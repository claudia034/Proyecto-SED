import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader/Preloader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Perfil.scss";

const Perfil = () => {
  const [isEditing, setEditing] = useState(false);
  const [dataPerfil, setData] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const saveChanges = async () => {
    console.log(editedData);
    const array = Object.keys(editedData);
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (editedData[element] !== undefined) {
        dataPerfil[element] = editedData[element];
      }
    }
    const response = await axios.post(
      "/auth/editedprofile",
      {
        data: editedData,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`, // Sustituye "tuToken" con la variable que contiene tu token
        },
      }
    );

    console.log("Respuesta del servidor:", response.data);
    setEditing(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    setData(true);
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `/auth/logged/${localStorage.getItem("token")}`
        );
        setData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
        localStorage.clear("token");
        navigate("/");
      }
    }
    if (!dataPerfil) fetchData();
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container-perfil">
      {dataPerfil ? (
        <>
          <h1>Perfil</h1>
          <div className="container-perfil__datos">
            <div className="container-perfil__datos__info">
              {!isEditing ? (
                <>
                  <p>Nombre de usuario: </p>
                  <h2>{dataPerfil.username}</h2>
                  <p>Correo: </p>
                  <p>{dataPerfil.email}</p>
                  <p>Numero de telefono: </p>
                  <p>{dataPerfil.phoneNumber}</p>
                  <p>Direccion: </p>
                  <p>{dataPerfil.address}</p>
                  <p>Genero:</p>
                  <p>{dataPerfil.gender}</p>
                  <p>Contacto de emergencia:</p>
                  <p>{dataPerfil.emergencyContact}</p>
                  <p>Numero de contacto de emergencia:</p>
                  <p>{dataPerfil.guardianNumber}</p>
                  <p>Edad:</p>
                  <p>{dataPerfil.age}</p>
                </>
              ) : (
                <>
                  <form>
                    <label>Nombre de usuario:</label>
                    <input
                      type="text"
                      name="username"
                      value={editedData.username || dataPerfil.username}
                      onChange={handleInputChange}
                    />
                  </form>
                  <form>
                    <label>Correo:</label>
                    <input
                      type="text"
                      name="email"
                      value={editedData.email || dataPerfil.email}
                      onChange={handleInputChange}
                    />
                  </form>
                  <form>
                    <label>Numero de telefono:</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={editedData.phoneNumber || dataPerfil.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </form>
                  <form>
                    <label>Direccion:</label>
                    <input
                      type="text"
                      name="address"
                      value={editedData.address || dataPerfil.address}
                      onChange={handleInputChange}
                    />
                  </form>
                  <form>
                    <label>Genero:</label>
                    <select
                      className="custom-select d-block w-100"
                      id="gender"
                      name="gender"
                      required=""
                      onChange={handleInputChange}
                    >
                      <option value="">Seleccione...</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </form>
                  <form>
                    <label>Contacto de emergencia:</label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={
                        editedData.emergencyContact ||
                        dataPerfil.emergencyContact
                      }
                      onChange={handleInputChange}
                    />
                  </form>
                  <form>
                    <label>Numero de contacto de emergencia:</label>
                    <input
                      type="text"
                      name="guardianNumber"
                      value={
                        editedData.guardianNumber || dataPerfil.guardianNumber
                      }
                      onChange={handleInputChange}
                    />
                  </form>
                  <form>
                    <label>Edad:</label>
                    <input
                      type="number"
                      name="age"
                      value={editedData.age || dataPerfil.age}
                      onChange={handleInputChange}
                    />
                  </form>
                </>
              )}
            </div>
          </div>
          <div className="options">
            {isEditing ? (
              <>
                <button onClick={saveChanges}>Guardar cambios</button>
                <button onClick={() => setEditing(false)}>Cancelar</button>
              </>
            ) : (
              <button onClick={() => setEditing(true)}>Editar perfil</button>
            )}
          </div>
        </>
      ) : (
        <>
          <Preloader></Preloader>
        </>
      )}
    </div>
  );
};

export default Perfil;
