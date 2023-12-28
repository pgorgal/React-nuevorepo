import { Link, useParams } from "react-router-dom"
import "../styles/Producto.css"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"

const Producto = () => {
    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const product = doc(db, "productos", id)
        getDoc(product).then(data => {
            if (data.exists()) {
                setProducto({id:data.id, ...data.data()})
            }
        })
    }, [])

return (
    <div>
        <div className="column contenedor">
            <img src={producto.img} alt={producto.descripcion} className="img-detalle" />
            <div>
                <h2 className="detalle1">{producto.nombre}</h2>
                <h2 className="detalle">Medidas {producto.medidas}cm</h2>
                <h2 className="detalle">Material {producto.material}</h2>
                <h2 className="detalle">${producto.precio} </h2>
            </div>
        </div>
        <Link to="/Productos" className="navbar-item" id="volver">Volver</Link>
    </div>
)
}

export default Producto