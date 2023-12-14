import { Link, useParams } from "react-router-dom"
import "../styles/Producto.css"
import products from "./AsyncMock"

function Producto() {

    const { productoId } = useParams()

    const producto = products.find((producto) => producto.id === productoId)

    const { img, descripcion, nombre, medidas, precio, material } = producto

    return (    
        <div>
            <div className="column contenedor">
                <img src={img} alt={descripcion} className="img-detalle" />
                <div>
                    <h2 className="detalle1">{nombre}</h2>
                    <h2 className="detalle">Medidas {medidas}cm</h2>
                    <h2 className="detalle">Material {material}</h2>
                    <h2 className="detalle">${precio} </h2>
                </div>
            </div>
            <Link to="/Productos" className="navbar-item" id="volver">Volver</Link>
        </div>
    )
}

export default Producto