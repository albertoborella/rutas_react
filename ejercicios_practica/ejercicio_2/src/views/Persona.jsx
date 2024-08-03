import { useParams } from "react-router-dom";
import { useState } from "react";

export const Persona = () => {
  const { nombre = "sin nombre" } = useParams();
  const { apellido = "sin apellido" } = useParams();

  const [mi_nombre, setMiNombre] = useState("");
  const [mi_apellido, setMiApellido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    setMiNombre(nombre);
    setMiApellido(apellido);
  };
  const handleReset = () => {
    setMiNombre("");
    setMiApellido("");
  };
  return (
    <>
      <h1>
        Tu nombre es: {mi_nombre}
        {mi_apellido}
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" defaultValue={nombre} />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          defaultValue={apellido}
        />
        <input type="submit" value="Enviar" />
        <input type="button" value="Reset" onClick={handleReset} />
      </form>
    </>
  );
};
