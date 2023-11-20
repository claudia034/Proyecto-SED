import axios from "axios";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import AdminUsers from "./Users/AdminUsers";

const Dashboard = () => {
  const [isEditing, setEditing] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (!isEditing) {
      async function validToken() {
        const response = await axios.get("/auth/getrole", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`, // Sustituye "tuToken" con la variable que contiene tu token
          },
        });
        const { user } = response.data;
        console.log("Respuesta del servidor: ", user.rol);
        setUserRole(user.rol);
        if (user.rol == -1) {
          logout();
        }
      }
      validToken();
    }
  }, [isEditing]);
  return (
    <div className="container-perfil">
      <h1>Dashboard</h1>
      <div className="options">
        <button>Usuarios</button>
        <button>Planes</button>
        <button>Adquiridos</button>
      </div>
      <div className="container-users">
        <AdminUsers
          setEditing={setEditing}
          isEditing={isEditing}
          userRole={userRole}
        ></AdminUsers>
      </div>
    </div>
  );
};

export default Dashboard;
