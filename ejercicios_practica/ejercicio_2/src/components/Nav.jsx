import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav className="Navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/componente1">Componente1</Link>
          </li>
          <li>
            <Link to="/componente2">Componente2</Link>
          </li>
          <li>
            <Link to="/subrutas">Sub-Rutas</Link>
          </li>
          <li>
            <Link to="/persona">Persona</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
