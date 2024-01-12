import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"
//import ItemListContainer from "../components/ItemListContainer"
import CarritoItem from "../components/CarritoItem"
import { Link } from "react-router-dom"

const Carrito = () => {
    const { carrito, vaciar, qTotal, total } = useContext(CarritoContext)

    if (qTotal === 0) {
        return (
            <div>
                <h3>El carrito está vacio</h3>
                <Link to="Productos">Productos</Link>
            </div>
        )
    } else 

    return (
        <div>
            {carrito.map(p => <CarritoItem key={p.id}{...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => vaciar()} Vaciar Carrito></button>
            <Link to={"/checkout"}>Checkout</Link>
        </div>
    )
}

export default Carrito