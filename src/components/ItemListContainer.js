import React from 'react'
import "../styles/ItemListContainer.css"
import products from './AsyncMock'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function ItemListContainer(props) {

    const { numero } = props

    const [contadores, setContadores] = useState({})

    const handleRestar = () => {
        if (contadores[numero] > 0)
            setContadores(prevContadores => ({
                ...prevContadores,
                [numero]: (prevContadores[numero] || 0) - 1,
            }))
    }

    const handleSumar = () => {
        setContadores(prevContadores => ({
            ...prevContadores,
            [numero]: (prevContadores[numero] || 0) + 1,
        }))
    }

    return (
        <div className="tarjetola">
            {products.map((producto) => {
                return (
                    <Card key={producto.id} className="column tarjetas" id="card" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={producto.img} alt={producto.descripcion} className="img" />
                        <Card.Body>
                            <Card.Title className="card-title">{producto.nombre}</Card.Title>
                            <Card.Text className="card-prize">${producto.precio} </Card.Text>
                            <div className="centro">
                                <Link to={`/Productos/${producto.id}`} id="detalle">Ver detalle</Link>
                            </div>
                            <div className="column cantidad">
                                <div className="cantidades">
                                    <Button onClick={handleRestar} variant="primary">-</Button>
                                </div>
                                <div className="cantidades">
                                    <Card.Text>{contadores[numero] || 0}</Card.Text>
                                </div>
                                <div className="cantidades">
                                    <Button onClick={handleSumar} variant="primary">+</Button>
                                </div>
                            </div>
                            <div className="centro">
                                <button id="detalle">Agregar al carrito</button>
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