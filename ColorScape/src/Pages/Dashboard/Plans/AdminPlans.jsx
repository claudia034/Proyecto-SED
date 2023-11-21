import { useEffect, useState } from "react";
import "./AdminPlans.scss";
import axios from "axios";

const AdminPlans = () => {
  const [planes, setPlanes] = useState([]);
  const [addPlan, setAddPlan] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [data, setData] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setEditedData({ ...editedData, [name]: value });
  };
  useEffect(() => {
    const getPlans = async () => {
      const { data } = await axios.get("/general/plans", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
      setPlanes(data.plans);
    };
    getPlans();
  }, [addPlan, editing]);
  return (
    <>
      <div className="container-todo-plans">
        <div className="options">
          {addPlan || editing ? (
            <div>
              <input
                type="text"
                placeholder="Nombre del plan"
                name="nombre"
                value={editing ? editedData.nombre : data.nombre}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Descripción del plan"
                name="descripcion"
                value={editing ? editedData.descripcion : data.descripcion}
                onChange={handleInputChange}
              />
              <input
                type="number"
                placeholder="Precio del plan"
                name="precio"
                value={editing ? editedData.precio : data.precio}
                onChange={handleInputChange}
              />
              <button
                onClick={async () => {
                  const endpoint = editing
                    ? `/general/plans/${editedData._id}`
                    : "/general/plans";

                  const requestData = editing ? editedData : data;

                  console.log("Datos de request: ", requestData);

                  const reponse = await axios({
                    method: "post",
                    url: endpoint,
                    data: requestData,
                    headers: {
                      authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  });

                  setEditing(false);
                  setData({
                    nombre: "",
                    descripcion: "",
                    precio: 0,
                  });
                }}
              >
                {editing ? "Guardar Cambios" : "Agregar"}
              </button>
              <button
                onClick={() => {
                  setAddPlan(false);
                  setEditing(false);
                  setData({
                    nombre: "",
                    descripcion: "",
                    precio: 0,
                  });
                }}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <>
              <div className="container-plans">
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Precio</th>
                      <th>Editar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planes.length > 0 ? (
                      planes.map((plan) => (
                        <tr>
                          <td>{plan.nombre}</td>
                          <td>{plan.descripcion}</td>
                          <td>{plan.precio}</td>
                          <td>
                            <button
                              onClick={() => {
                                setData(plan);
                                setEditedData(plan);
                                setEditing(true);
                              }}
                            >
                              Editar
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>No </td>
                        <td>hay </td>
                        <td>planes </td>
                        <td>disponibles</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <button onClick={() => setAddPlan(true)}>Agregar</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default AdminPlans;
