import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'

function Contador() {

    //const { numero } = props

    const [contadores, setContadores] = useState(0)

    const handleRestar = () => {
        if (contadores > 0)
            setContadores(contadores - 1)
    }

    const handleSumar = () => {
        setContadores(contadores  + 1)
    }

    return (
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
    )
}

export default Contador