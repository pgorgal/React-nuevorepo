import React from 'react'
import "../styles/NavBar.css"
import "../styles/Header.css"
import "../styles/SearchBar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'
import searchImages from "./Api"

const NavBar = () => {

    const handleSubmit = async (term)=>{
        const resultado = await searchImages(term)
        console.log(resultado)
    }

    return (
        <section className="hero is-warning">
            <nav className="navbar hero-body">
                <div className="container">
                    <div id="navMenu" className="navbar-menu">
                        <div class="navbar-start">
                            <Link to="/" className="navbar-item">Inicio</Link>
                            <Link to="Productos" className="navbar-item">Productos</Link>
                            <Link to="Contacto" className="navbar-item">Contacto</Link>
                            {/* <SearchBar id="barrabuscona" placeholder="Ingresá el producto" enSubmit={handleSubmit} /> */}
                        </div>
                        <CartWidget class="navbar-item" />
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default NavBar