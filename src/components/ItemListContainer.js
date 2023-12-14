import React from 'react'
import "../styles/ItemListContainer.css"
import products from './AsyncMock'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


    function ItemListContainer(){

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
                            </Card.Body>
                        </Card>
                    )
                }
                )}
            </div>
        )
    }


export default ItemListContainer