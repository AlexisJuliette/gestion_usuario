import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../services/userService";

function UserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/api/users/${id}`
        );

        const data = await response.json();

        console.log(data);

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadUser();
  }, [id]);

  if (!user) {
    return <h2>Cargando usuario...</h2>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateUser(Number(id), user);

    navigate("/");
  };

  return (
    <div className="container">
      <h2>Editar Usuario</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={user.name || ""}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <input
          value={user.lastname || ""}
          onChange={(e) =>
            setUser({ ...user, lastname: e.target.value })
          }
        />

        <input
          value={user.email || ""}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <button type="submit">
          Actualizar
        </button>
      </form>
    </div>
  );
}

export default UserEditPage;