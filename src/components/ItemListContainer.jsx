import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../servicios/firebaseconfig'

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoria } = useParams()
  console.log(items)

  useEffect(() => {
    setCargando(true)

    const fetchProducts = async () => {
      try {
        let productosQuery
        if (categoria) {
          productosQuery = query(collection(db, "productos"), where("categoria", "==", categoria))
        } else {
          productosQuery = collection(db, "productos")
        }

        const snapshot = await getDocs(productosQuery)
        const prods = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setItems(prods)
      } catch (err) {
        console.error("Error fetching products:", err)
      } finally {
        setCargando(false)
      }
    }

    fetchProducts()
  }, [categoria])

  if (cargando) {
    return <h3>cargando...</h3>
  }

  return (
    <div className="titulo">
      <ItemList items={items} />
    </div>
  )
}