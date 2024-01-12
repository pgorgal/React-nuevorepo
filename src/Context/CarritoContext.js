import { createContext, useState, useEffect } from "react"

export const CarritoContext = createContext({ carrito: [], qTotal: 0 })

export const CarroProv = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [qTotal, setQTotal] = useState(0)
    const [total, setTotal] = useState(0)

    const agregarItem = (productoAgregado, q) => {
        setCarrito(prev => {
            const existingProductIndex = prev.findIndex(producto => producto.id === productoAgregado.id)
    
            if (existingProductIndex !== -1) {
                const updatedCart = [...prev]
                updatedCart[existingProductIndex].q += q
                return updatedCart
            } else {
                return [...prev, { ...productoAgregado, q }]
            }
        })
    }

    const quitar = (itemId) => {
        const actualizar = carrito.filter(producto => producto.id !== itemId)
        setCarrito(actualizar)
    }

    const vaciar = () => {
        setCarrito([])
    }

    useEffect(() => {
        const updatedTotal = carrito.reduce((acc, producto) => acc + producto.q * producto.precio, 0)
        setTotal(updatedTotal)

        const updatedQTotal = carrito.reduce((acc, producto) => acc + producto.q, 0)
        setQTotal(updatedQTotal)
    }, [carrito])

    return (
        <CarritoContext.Provider value={{ carrito, agregarItem, quitar, vaciar, qTotal, total }} >
            {children}
        </CarritoContext.Provider>
    )
}
