import React from 'react'
import "../styles/ItemListContainer.css"
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import Contador from './Contador'

const ItemListContainer = (allProducts,setAllProducts) => {

    const [productos, setProductos] = useState([])

    const onAddProducto=()=>{
        console.log("add")
    }

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        getDocs(itemsCollection).then(data => {
            setProductos(data.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
    }, [])

    /* const [qAgregada, setQAgregada] = useState(0)

    const handleOnAdd = (q) => {
        setQAgregada(q)
    } */

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
                            <Contador />
                            <div className="centro">
                                <button id="detalle" onClick={()=>onAddProducto()}>Agregar al carrito</button>
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