import { db } from "../index"
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card'

function Administracion() {

    const [productos, setProductos] = useState([])
    const itemsCollection = collection(db, "productos")

    const getProductos = async () => {
        const data = await getDocs(itemsCollection)
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        setProductos(filteredData)
    }

    useEffect(() => {
        getProductos()
    }, [])

    const [newDescripcion, setNewDescripcion] = useState("")
    const [newImg, setNewImg] = useState("")
    const [newMaterial, setNewMaterial] = useState("")
    const [newMedidas, setNewMedidas] = useState("")
    const [newNombre, setNewNombre] = useState("")
    const [newPrecio, setNewPrecio] = useState(0)

    const onSubmitProducto = async () => {
        await addDoc(itemsCollection, { descripcion: newDescripcion, img: newImg, material: newMaterial, medidas: newMedidas, nombre: newNombre, precio: newPrecio })
        getProductos()
    }

    const borrarProducto = async (id) => {
        const itemDoc=doc(db, "productos", id)
        await deleteDoc(itemDoc)
        getProductos()
    }

    return (
        <div>
            <div>
                <p>Nuevo producto</p>
                <input placeholder="Descripción" onChange={(e) => setNewDescripcion(e.target.value)} />
                <input placeholder="Imagen" onChange={(e) => setNewImg(e.target.value)} />
                <input placeholder="Material" onChange={(e) => setNewMaterial(e.target.value)} />
                <input placeholder="Medidas" onChange={(e) => setNewMedidas(e.target.value)} />
                <input placeholder="Nombre" onChange={(e) => setNewNombre(e.target.value)} />
                <input placeholder="Precio" type="number" onChange={(e) => setNewPrecio(e.target.value)} />
                <button onClick={onSubmitProducto} >Enviar</button>
            </div>
            <div className="tarjetola">
                {productos.map((producto) => {
                    return (
                        <Card key={producto.id} className="column tarjetas" id="card" style={{ width: '12rem' }}>
                            <Card.Img variant="top" src={producto.img} alt={producto.descripcion} className="img" />
                            <Card.Body>
                                <Card.Title className="card-title">Nombre: {producto.nombre}</Card.Title>
                                <Card.Text className="card-prize">Precio: ${producto.precio} </Card.Text>
                                <Card.Text className="card-prize">Medidas: {producto.medidas} </Card.Text>
                                <Card.Text className="card-prize">Material: {producto.material} </Card.Text>
                                <button onClick={() => borrarProducto(producto.id)}>Borrar</button>
                            </Card.Body>
                        </Card>
                    )
                }
                )}
            </div>

        </div>
    )
}

export default Administracion