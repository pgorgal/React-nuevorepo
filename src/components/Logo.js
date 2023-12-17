import React from 'react'
import Logo from "../media/LogoBC.jpg" 
import "../styles/Logo.css"


function LogoBC() {

    return (
        <div>
            <img src={Logo} alt="Logo Bendita Corteza dentro de disco de sierra" className="logo" />
        </div>
    )
}

export default LogoBC 