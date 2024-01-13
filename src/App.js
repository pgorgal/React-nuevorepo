import "./styles//App.css"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Producto from "./components/Producto"
import Footer from "./components/Footer"
import Checkout from "./pages/Checkout"
import Fondo from "./media/fonfofondo1.jpg"
import "bulma/css/bulma.css"
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Administracion from "./pages/Administracion"
import Carrito from "./pages/Carrito"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarroProv } from "./Context/CarritoContext"

function App() {

    return (
        <BrowserRouter>
            <div id="Fondo" style={{ backgroundImage: `url(${Fondo})` }}>
                <Header />
                <CarroProv>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="Productos" element={<Productos />} />
                        <Route path="Productos/:id" element={<Producto />} />
                        <Route path="Contacto" element={<Contacto />} />
                        <Route path="Administracion" element={<Administracion />} />
                        <Route path="Carrito" element={<Carrito />} />
                        <Route path="Checkout" element={<Checkout />} />
                        <Route path="*" element={<div className="column nope">404 - Page not found, bitch.</div>} />
                    </Routes>
                </CarroProv>
                <Footer />
            </div>
        </BrowserRouter >
    )
}

export default App