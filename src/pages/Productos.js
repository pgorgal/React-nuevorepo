import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ItemListContainer from '../components/ItemListContainer'

function Productos() {
  const [productos, setProductos] = useState([])
  const location = useLocation()
  const searchTerm = new URLSearchParams(location.search).get('search')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore()
        const productosCollection = collection(db, 'productos')
        const data = await getDocs(productosCollection)
        const productosData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

        const filteredProductos = searchTerm
          ? productosData.filter((producto) =>
              producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : productosData

        setProductos(filteredProductos)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [searchTerm])

  return (
    <div>
      <div>
        <h3 className="column nope">Productos</h3>
      </div>
      <div id="box">
        <p>Todas las tablas son confeccionadas con maderas seleccionadas...</p>
        <p>Se hacen a pedido y de la medida que más te guste. Se entregan curadas con productos...</p>
      </div>
      <ItemListContainer productos={productos} />
    </div>
  )
}

export default Productos
