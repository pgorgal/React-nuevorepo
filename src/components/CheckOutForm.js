import { useState } from "react"
import "../styles/CheckoutForm.css"
import Checkout from "../pages/Checkout"


const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setName] = useState('')
    const [telefono, setPhone] = useState('')
    const [mail, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            nombre, telefono, mail
        }
        onConfirm(userData)
    }
    return (
        <div className="formularioOut">
            <div className="formulario2">
                <h3 className="nopes">Complete con sus datos</h3>
            <form onSubmit={handleConfirm} method="post">
                <div className="fila">
                    <input type="text" required value={nombre} onChange={({ target }) => setName(target.value)} className="form-controlOut" />
                    <label className="label">Nombre</label>
                </div>
                <div className="fila">
                    <input type="text" required value={telefono} onChange={({ target }) => setPhone(target.value)}  className="form-controlOut"/>
                    <label className="label">Telefono</label>
                </div>
                <div className="fila">
                    <input type="text" value={mail} onChange={({ target }) => setEmail(target.value)}  className="form-controlOut"/>
                    <label className="label">Correo Electrónico</label>
                </div>
                <input type="submit" value="Crear compra" id="botonesContactoOut"/>                
            </form>
            </div>
        </div>
    )
}
export default CheckoutForm