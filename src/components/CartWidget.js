import "../styles/CartWidget.css"
import { IoCartOutline } from "react-icons/io5"
import { CarritoContext } from '../Context/CarritoContext'
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { qTotal } = useContext(CarritoContext)

    return (
        <div>
            <Link to={"/Carrito"}>
                <IoCartOutline className="icono" />
                {qTotal !== undefined ? <span id="hardcode">({qTotal})</span> : <span id="hardcode">(0)</span>}
            </Link>
        </div>
    )
}

export default CartWidget