import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser, getUserByEmail } from "../services/userService";

function UserListPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [searchEmail, setSearchEmail] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id: number) => {
  const confirmed = window.confirm("¿Está seguro de eliminar este usuario?");

  if (!confirmed) return;

  await deleteUser(id);
  loadUsers();
  };

  const handleSearch = async () => {
    if (!searchEmail.trim()) {
      loadUsers();
      return;
  }

  const data = await getUserByEmail(searchEmail);
  setUsers([data]);
  };

  const handleClearSearch = () => {
  setSearchEmail("");
  loadUsers();
  };
  return (
    <div className="container">
     <div className="header-actions">
      <h1>Gestión de Usuarios</h1>

     <Link to="/create">
      <button>+ Nuevo Usuario</button>
     </Link>
    </div>

    <div className="search-box">
      <input
        placeholder="Buscar por email"
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
        />

        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClearSearch}>Limpiar</button>
      </div>

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
                <Link to={`/edit/${user.id}`}>
                  <button>Editar</button>
                </Link>

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