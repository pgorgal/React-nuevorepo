import { Link, useParams } from "react-router-dom"
import "../styles/Producto.css"
import Fotos from "./Fotos"

function Foto() {

    const { productoId } = useParams()

    const producto = Fotos.find((producto) => producto.id === productoId)

    const { img, descripcion, nombre } = producto

    return (    
        <div>
            <div className="column contenedor">
                <img src={img} alt={descripcion} className="img-detalle" />
                <div>
                    <h2 className="detalle1">{nombre}</h2>
                </div>
            </div>
            <Link to="/Productos" className="navbar-item" id="volver">Volver</Link>
        </div>
    )
}

export default Foto