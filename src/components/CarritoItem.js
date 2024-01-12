import { useContext } from "react"
import "../styles/CarritoItem.css"
import { CarritoContext } from "../Context/CarritoContext"

const CarritoItem = ({ nombre, precio, id, q, img, descripcion }) => {

  const { quitar } = useContext(CarritoContext)

  return (
    <div className="boxCarrito">
      <img src={img} alt={descripcion} className="fotito" />
      <p>{nombre}</p>
      <p>Cantidad: {q}</p>
      <p>Subtotal: {precio * q}</p>
      <button onClick={() => quitar(id)} id="detalle">Eliminar</button>
    </div>
  )
}

export default CarritoItem