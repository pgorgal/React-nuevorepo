import React from 'react'
import "../styles/NavBar.css"
import "../styles/Header.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'
import products from './AsyncMock'

const NavBar = () => {

    return (
        <section className="hero is-warning">
            <nav className="navbar hero-body">
                <div className="container">
                    <div id="navMenu" className="navbar-menu">
                        <div class="navbar-start">
                            <Link to="/" className="navbar-item">Inicio</Link>
                            <Link to="Productos" className="navbar-item">Productos</Link>
                            <Link to="Contacto" className="navbar-item">Contacto</Link>
                            <SearchBar placeholder="Ingresá el producto" data={products} />
                        </div>
                        <CartWidget class="navbar-item" />
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default NavBar