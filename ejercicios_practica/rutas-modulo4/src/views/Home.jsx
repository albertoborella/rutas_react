import { Link} from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <h1>Bienvenido a la aplicación de navegación</h1>
        <p>Este es el componente de inicio</p>
        <Link to="/contact" >Ir al componente de contacto</Link>
    </div>
  )
}
