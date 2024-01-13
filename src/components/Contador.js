import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contador = ({ agregarItem, inicial }) => {

    const [q, setQ] = useState(inicial)

    const handleRestar = () => {
        if (q > 0) {
            setQ(q - 1)
        }
    }

    const handleSumar = () => {
        setQ(q + 1)
    }

    const notify = () => toast("Se agregó el producto al carrito")

    return (
        <div>
            <div className="column cantidad">
                <div className="cantidades">
                    <Button onClick={handleRestar} variant="primary">-</Button>
                </div>
                <div className="cantidades">
                    <Card.Text>{q}</Card.Text>
                </div>
                <div className="cantidades">
                    <Button onClick={handleSumar} variant="primary">+</Button>
                </div>
            </div>
            <div className="cantidad">
                <button id="detalle" onClick={() => agregarItem(q)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Contador