import "../styles/Carrito.css" 
import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"
import CarritoItem from "../components/CarritoItem"
import { Link } from "react-router-dom"

const Carrito = () => {
    const { carrito, vaciar, qTotal, total } = useContext(CarritoContext)

    if (qTotal === 0) {
        return (
            <div>
                <h3>El carrito está vacio</h3>
                <Link to="/Productos" id="detalleCarro">Volver</Link>
            </div>
        )
    } else 

    return (
        <div className="boxCarro">
            <p className="aviso">Las tablas se realizan a pedido y están disponibles a los 15 días de realizada la compra </p>
            <br></br>
            {carrito.map(p => <CarritoItem key={p.id}{...p} />)}
            <h3>Total: ${total}</h3>
            <Link to={"/Productos"} id="detalleCarro">Seguir Comprando</Link>
            <button onClick={() => vaciar()} id="detalleCarro">Vaciar Carrito</button>
            <Link to={"/checkout"} id="detalleCarro">Checkout</Link>
        </div>
    )
}

export default Carrito