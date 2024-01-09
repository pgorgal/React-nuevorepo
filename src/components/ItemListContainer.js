import React, { useContext } from 'react'
import "../styles/ItemListContainer.css"
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import Contador from './Contador'
import { CarritoContext } from '../Context/CarritoContext'

const ItemListContainer = ({ id, img, descripcion, nombre, medidas, precio }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const { agregar } = useContext(CarritoContext)

    const [productos, setProductos] = useState([])

    const handleAgregar = (contadores) => {
        setCantidadAgregada(contadores)

        const item = { id, nombre, precio }
        agregar(item, contadores)
    }

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        getDocs(itemsCollection).then(data => {
            setProductos(data.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
    }, [])

    return (
        <div className="tarjetola">
            {productos.map((producto) => {
                return (
                    <Card key={producto.id} className="column tarjetas" id="card" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={producto.img} alt={producto.descripcion} className="img" />
                        <Card.Body>
                            <Card.Title className="card-title">{producto.nombre}</Card.Title>
                            <Card.Text className="card-prize">${producto.precio} </Card.Text>
                            <div className="centro">
                                <Link to={`/Productos/${producto.id}`} id="detalle">Ver detalle</Link>
                            </div>
                            <div>
                                <Contador inicial={1} agregar={handleAgregar} />
                                
                            </div>
                        </Card.Body>
                    </Card>
                )
            }
            )}
        </div>
    )
}

export default ItemListContainer