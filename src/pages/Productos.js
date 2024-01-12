import ItemListContainer from "../components/ItemListContainer"
import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

function Productos() {

    const [productos, setProductos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore()
        const productosCollection = collection(db, "productos")
        const data = await getDocs(productosCollection)
        const productosData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setProductos(productosData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

    return (
        <div>
            <div>
                <h3 className="column nope">Productos</h3>
            </div>
            <div id="box">
                <p>Todas las tablas son confeccionadas con maderas seleccionadas duras o semiduras como el
                    Petiribí, Guayubira o Guatambú. </p>
                <p>Se hacen a pedido y de la medida que más te guste. Se entregan curadas con productos
                    exclusivos aptos para el consumo.</p>
            </div>
            <ItemListContainer  productos={productos}  />
        </div>
    )
}

export default Productos