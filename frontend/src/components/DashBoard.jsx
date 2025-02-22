import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/watches", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then(res => setWatches(res.data));
  }, []);

  return (
    <div>
      <h1>Lista de Relojes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Precio</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {watches.map(watch => (
            <tr key={watch.id}>
              <td>{watch.id}</td>
              <td>{watch.name}</td>
              <td>{watch.price}</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
