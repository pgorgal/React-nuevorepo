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

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

    return (
        <BrowserRouter>
            <div id="Fondo" style={{ backgroundImage: `url(${Fondo})` }}>
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="Productos" element={<Productos/>} />
                    <Route path="Productos/:productoId" element={<Producto/>} />
                    <Route path="Contacto" element={<Contacto/>} />
                    <Route path="*" element={<div className="column nope">404 - Page not found, bitch.</div> } />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter >
    )
}

export default App