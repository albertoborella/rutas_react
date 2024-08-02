import { Link } from "react-router-dom"
import { useState } from "react"

export const Contact = () => {
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = () => {
      setMensaje('Enviado correctamente')
    }
    console.log(mensaje) 

  return (
    <>
    <h1>Componente de Contacto</h1>
    <form onSubmit={handleSubmit} >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre"/><br/>
        <label htmlFor="mensaje">Mensaje</label>
        <input type="text" name="mensaje" /><br/>
        <input type="submit" value="Enviar" />
    </form>
    <p>{mensaje}</p><br/>
    
    <Link to="/">Volver a inicio</Link>
    </>
  )
}
