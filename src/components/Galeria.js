import Fotos from './Fotos'
import Card from 'react-bootstrap/Card'

function Galeria(props) {

    return (
        <div className="tarjetola">
            {Fotos.map((foto) => {
                return (
                    <Card key={foto.id} className="column tarjetas" id="card" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={foto.img} alt={foto.descripcion} className="img" />
                        <Card.Body>
                            <Card.Title className="card-title">{foto.nombre}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            }
            )}
        </div>
    )
}

export default Galeria