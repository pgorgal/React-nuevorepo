import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'

const Contador = ({ agregar, inicial }) => {

    const [contadores, setContadores] = useState(0)

    const handleRestar = () => {
        if (contadores > 0)
            setContadores(contadores - 1)
    }

    const handleSumar = () => {
        setContadores(contadores + 1)
    }

    return (
        <div>
        <div className="column cantidad">
            <div className="cantidades">
                <Button onClick={handleRestar} variant="primary">-</Button>
            </div>
            <div className="cantidades">
                <Card.Text>{contadores}</Card.Text>
            </div>
            <div className="cantidades">
                <Button onClick={handleSumar} variant="primary">+</Button>
            </div>
            </div>
            <div className="cantidad">
                <button id="detalle" onClick={() => agregar(contadores)}>Agregar al carrito</button>
            </div>
        </div>
        )
}

export default Contador