import { createContext, useState } from "react";

export const CarritoContext = createContext({ carrito: [] })

export const CarroProv = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregar = (producto, cantidad) => {
        if (!esta(producto.id)) {
            setCarrito(prev => [...prev, { ...producto, cantidad }])
        } else {
            console.error("Producto ya agregado")
        }
    }

    const quitar = (itemId) => {
        const actualizar = carrito.filter(producto => producto.id !== itemId)
        setCarrito(actualizar)
    }

    const vaciar = () => {
        setCarrito([])
    }

    const esta = (itemId) => {
        return carrito.some(producto => producto.id === itemId)
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregar, quitar, vaciar }} >
            {children}
        </CarritoContext.Provider>
    )
}