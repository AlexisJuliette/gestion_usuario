import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { Link } from "react-router-dom";
import { deleteUser } from "../services/userService";

function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <Link to="/create">
        <button>Nuevo Usuario</button>
      </Link>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListPage;