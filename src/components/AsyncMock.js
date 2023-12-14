import plato from "../media/tablas/plato.jpeg"
import platogrande from "../media/tablas/platogrande.jpeg"
import guayularga from "../media/tablas/guayularga.jpeg"
import pizzera from "../media/tablas/pizzera.jpeg"
import petiribi2 from "../media/tablas/petiribi2.jpeg"
import petiribi1 from "../media/tablas/petiribi1.jpeg"

const products = [
    { id: "1", img: plato, descripcion: "Plato de asado", nombre: "Plato chico", medidas: ": 25x25", precio: "3000", material: ": Guayubira" },
    { id: "2", img: platogrande, descripcion: "Plato de asado", nombre: "Plato grande", medidas: ": 25x35", precio: "4000", material: ": Guayubira" },
    { id: "3", img: guayularga, descripcion: "Tabla de asado", nombre: "Tabla de asado", medidas: ": 35x50", precio: "5000", material: ": Guayubira" },
    { id: "4", img: pizzera, descripcion: "Tabla para pizza", nombre: "Tabla pizzera", medidas: ": 37x37", precio: "5000", material: ": Guayubira" },
    { id: "5", img: petiribi2, descripcion: "Plato de asado", nombre: "Plato chico", medidas: ": 25x25", precio: "4000", material: ": Petiribí" },
    { id: "6", img: petiribi1, descripcion: "Plato de asado", nombre: "Plato grande", medidas: ": 25x35", precio: "5000", material: ": Petiribí" },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId) )
        }, 500)
    })
}

export default products