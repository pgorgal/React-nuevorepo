import { useContext } from "react"
import "../styles/CarritoItem.css"
import { CarritoContext } from "../Context/CarritoContext"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CarritoItem = ({ nombre, precio, id, q, img, descripcion }) => {

  const { quitar } = useContext(CarritoContext)

  return (
    <Container id="boxCarrito">
      <Row>
        <Col><img src={img} alt={descripcion} className="fotito" /></Col>
        <Col><p>{nombre}</p></Col>
        <Col><p>Cantidad: {q}</p></Col>
        <Col><p>Subtotal: {precio * q}</p></Col>
        <Col><button onClick={() => quitar(id)} id="detalle">Eliminar</button></Col>
      </Row>
    </Container>
  )
}

export default CarritoItem