import { createContext, useState } from "react";

export const CarritoContext = createContext({ carrito: [] })

export const CarroProv = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    console.log(carrito)

    const agregarItem = (productoAgregado, q) => {
        if (!esta(productoAgregado.id)) {
            setCarrito(prev => [...prev, { ...productoAgregado, q }])
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
        <CarritoContext.Provider value={{ carrito, agregarItem, quitar, vaciar }} >
            {children}
        </CarritoContext.Provider>
    )
}
