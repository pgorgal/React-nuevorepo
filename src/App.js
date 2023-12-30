import "./styles//App.css"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Producto from "./components/Producto"
import Footer from "./components/Footer"
//import ItemListContainer from "./components/ItemListContainer"

import Fondo from "./media/fonfofondo1.jpg"

import "bulma/css/bulma.css"

import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Administracion from "./pages/Administracion"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {

const [allProducts, setAllProducts]= useState([])
const [total, setTotal]= useState(0)
const [countProducts, setCountProducts]= useState(0)

    return (
        <BrowserRouter>
            <div id="Fondo" style={{ backgroundImage: `url(${Fondo})` }}>
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="Productos" element={<Productos/>} />
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    <Route path="Productos/:id" element={<Producto/>} />
                    <Route path="Contacto" element={<Contacto/>} />
                    <Route path="Administracion" element={<Administracion/>} />
                    <Route path="*" element={<div className="column nope">404 - Page not found, bitch.</div> } />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter >
    )
}

export default App