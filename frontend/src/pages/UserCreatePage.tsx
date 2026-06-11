import { useState } from "react";
import { createUser } from "../services/userService";
import { Link } from "react-router-dom";

function UserCreatePage() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createUser({
      name,
      lastname,
      email,
      password: "123456",
      phone: "0000000000",
      status: "ACTIVE",
      role: {
        id: 1,
      },
    });

    setMessage("Usuario creado correctamente");
    setName("");
    setLastname("");
    setEmail("");
  };

  return (
    <div className="container">
      <h2>Crear Usuario</h2>
      <Link to="/">
        <button type="button">Volver</button>
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Apellido"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default UserCreatePage;