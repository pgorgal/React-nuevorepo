import React, { useContext, useState, useEffect } from 'react'
import "../styles/ItemListContainer.css"
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import Contador from './Contador'
import { CarritoContext } from '../Context/CarritoContext'

const ItemListContainer = ({ productos }) => {
    const [qAgregado, setQAgregado] = useState(0)
    const { agregarItem } = useContext(CarritoContext)  
    const [productosLocal, setProductosLocal] = useState([])

    const handleAgregar = (q) => {
        setQAgregado(q)
        const { id, nombre, precio } = productos
        const productoAgregado = { id, nombre, precio }
        agregarItem(productoAgregado, q)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore()
                const productosCollection = collection(db, "productos")
                const data = await getDocs(productosCollection)
                setProductosLocal(data.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="tarjetola">
            {productosLocal.map((producto) => {
                const { id, nombre, precio } = producto 
                return (
                    <Card key={id} className="column tarjetas" id="card" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={producto.img} alt={producto.descripcion} className="img" />
                        <Card.Body>
                            <Card.Title className="card-title">{nombre}</Card.Title>
                            <Card.Text className="card-prize">${precio} </Card.Text>
                            <div className="centro">
                                <Link to={`/Productos/${id}`} id="detalle">Ver detalle</Link>
                            </div>
                            <div>
                                <Contador inicial={0} agregarItem={handleAgregar} />
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default ItemListContainer
