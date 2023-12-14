import React from 'react'
import "../styles/CartWidget.css"
import { IoCartOutline } from "react-icons/io5"


const CartWidget = () => {

    return (
        <div>
            <IoCartOutline className="icono"/><span id="hardcode">(0)</span>
        </div>
    )
}

export default CartWidget