import axios from "axios";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import AdminUsers from "./Users/AdminUsers";
import AdminPlans from "./Plans/AdminPlans";
import AdminAdquiridos from "./Adquiridos/AdminAdquiridos";

const Dashboard = () => {
  const [isEditing, setEditing] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [optionSelected, setOptionSelected] = useState(0);

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
        <button
          onClick={() => {
            setOptionSelected(0);
          }}
        >
          Usuarios
        </button>
        <button
          onClick={() => {
            setOptionSelected(1);
          }}
        >
          Planes
        </button>
        <button
          onClick={() => {
            setOptionSelected(2);
          }}
        >
          Adquiridos
        </button>
      </div>
      {optionSelected == 0 ? (
        <div className="container-users">
          <AdminUsers
            setEditing={setEditing}
            isEditing={isEditing}
            userRole={userRole}
          ></AdminUsers>
        </div>
      ) : optionSelected == 1 ? (
        <AdminPlans></AdminPlans>
      ) : (
        <AdminAdquiridos></AdminAdquiridos>
      )}
    </div>
  );
};

export default Dashboard;
