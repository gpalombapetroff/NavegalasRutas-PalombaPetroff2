import React, { useEffect, useState } from 'react'
import { getProductById } from '../asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
  
  const [cargando, setCargando] = useState(true)

   const{id} = useParams() 
  useEffect(()=>{
        
        setCargando(true)
        
        getProductById(id)
        .then(res => {
          setProd(res)
        setCargando(false)
        })
      },[id])
 
 const mostrarSiguiente=()=>{ 
  setId (id +1)

 } 
 console.log(id)
 if(cargando){
  return(
    <h1>cargando...</h1>
  )
 }
    return (
    <div className='card'>
      <h3>{prod.nombre}</h3>
      <img src={prod.image} alt="" />
    <p>{prod.precio}</p>
    
    <button onClick={mostrarSiguiente}>ver siguiente</button>
    </div>
  )
}

export default ItemDetailContainer
