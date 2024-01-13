import { useContext } from "react"
import "../styles/CarritoItem.css"
import { CarritoContext } from "../Context/CarritoContext"

const CarritoItem = ({ nombre, precio, id, q, img, descripcion }) => {

  const { quitar } = useContext(CarritoContext)

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }} className="boxCarrito">
      <img src={img} alt={descripcion} className="fotito" />
      <p>{nombre}</p>
      <p>Cantidad: {q}</p>
      <p>Subtotal: {precio * q}</p>
      <button onClick={() => quitar(id)} id="detalleCarrito">X</button>
    </div>
  )
}

export default CarritoItem