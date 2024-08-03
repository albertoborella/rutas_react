import { Link, Outlet } from "react-router-dom";

export const RouterSubRutas = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/subruta1">Sub Ruta 1</Link>
          </li>
          <li>
            <Link to="/subruta2">Sub Ruta 2</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
