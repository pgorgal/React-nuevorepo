import "../styles/CartWidget.css"
import { IoCartOutline } from "react-icons/io5"
import { CarritoContext } from '../Context/CarritoContext'
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { qTotal } = useContext(CarritoContext)

    return (
        <div>
            <Link to={"/Carrito"}  /* style={{ display: qTotal > 0 ? "block" : "none" }} */ >
                <IoCartOutline className="icono" /><span id="hardcode">(0){qTotal}</span>
            </Link>
        </div>
    )
}

export default CartWidget