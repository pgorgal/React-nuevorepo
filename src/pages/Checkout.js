import { useContext, useState } from "react"
import { CarritoContext } from "../Context/CarritoContext"
import { db } from "../index"
import CheckoutForm from "../components/CheckOutForm"
import { Timestamp, writeBatch, addDoc, collection } from "firebase/firestore"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { carrito, qTotal, vaciar } = useContext(CarritoContext)

    const createOrder = async ({ nombre, telefono, mail }) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    nombre, telefono, mail,
                },
                items: carrito,
                total: qTotal,
                date: Timestamp.fromDate(new Date()),
            }

            const ordersCollection = collection(db, 'orders')
            const newOrderRef = await addDoc(ordersCollection, objOrder)
            setOrderId(newOrderRef.id)

            vaciar()
        } catch (error) {
            console.error("Error al crear la orden:", error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h3>Se está generando su orden</h3>
    }

    if (orderId) {
        return <h3>El ID de su orden es: {orderId}</h3>
    }

    return (
        <div>
            <h3>Checkout</h3>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout
