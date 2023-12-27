import React from 'react'
import "../styles/Cards.css"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { useState } from 'react'

const Cards = (props) => {

    const { id, img, descripcion, nombre, medidas, precio, material, numero } = props

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
        <Card className="column" id="card">
            <Card.Img src={img} variant="card-img-top" alt={descripcion} className="img" />
            <Card.Body>
                <Card.Title className="card-title">{nombre}</Card.Title>
                <Card.Text className="card-text">Medidas {medidas}cm</Card.Text>
                <Card.Text className="card-text">Material {material}</Card.Text>
                <Card.Text className="card-prize">${precio} </Card.Text>
                <div>
                    <button id="option">Ver detalle</button>
                </div>
                <div className="column cantidades">
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
                
            </Card.Body>
        </Card>
    )
}

export default Cards
