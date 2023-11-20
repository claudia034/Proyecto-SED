import { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = ({ setEditing, isEditing, userRole }) => {
  const [users, setUsers] = useState([]);
  const [dataPerfil, setData] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value == null ? " " : value });
    if (name != "email") {
      setData({ ...dataPerfil, [name]: value == null ? " " : value });
    }
  };

  const saveChanges = async (email) => {
    const response = await axios.post(
      `/admin/user/edit`,
      {
        email,
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

  useEffect(() => {
    axios
      .get("/admin/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  });

  return (
    <div>
      {!isEditing ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Nombre de Usuario</th>
                <th>Correo</th>
                {userRole === 2 && <th>Acciones</th>}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  {userRole === 2 && (
                    <td>
                      <button
                        onClick={() => {
                          setEditedData(user);
                          setData(user);
                          setEditing(true);
                        }}
                      >
                        Editar
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="profile-form">
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
              value={editedData.emergencyContact || dataPerfil.emergencyContact}
              onChange={handleInputChange}
            />
          </form>
          <form>
            <label>Numero de contacto de emergencia:</label>
            <input
              type="text"
              name="guardianNumber"
              value={editedData.guardianNumber || dataPerfil.guardianNumber}
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
          <form>
            <label>Rol:</label>
            <select
              className="custom-select d-block w-100"
              id="rol"
              name="rol"
              required=""
              onChange={handleInputChange}
            >
              <option value="">Seleccione...</option>
              <option value="2">Superadmin</option>
              <option value="1">Admin</option>
              <option value="0">Usuario</option>
            </select>
          </form>
          {isEditing ? (
            <>
              <button
                onClick={() => {
                  console.log(editedData, dataPerfil);
                  saveChanges(dataPerfil.email);
                }}
              >
                Guardar cambios
              </button>
              <button onClick={() => setEditing(false)}>Cancelar</button>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
