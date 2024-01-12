import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"

const CarritoItem = ({ nombre, precio, id, q }) => {

  const { removeItem } = useContext(CarritoContext)


  return (
    <div className="text-white flex justify-around">

      <h2 >{nombre}</h2>
      <p>Cantidad:{q}</p>
      <p>Subtotal:{precio * q}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>

    </div>
  )
}

export default CarritoItem