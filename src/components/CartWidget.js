import React, { useState } from 'react'
import "../styles/CartWidget.css"
import { IoCartOutline } from "react-icons/io5"

const CartWidget = () => {

    const [activo, setActivo] = useState(false)

    return (
        <div>
            <IoCartOutline className="icono" onClick={()=>setActivo(!activo)} /><span id="hardcode">(0)</span>
        </div>
    )
}

export default CartWidget