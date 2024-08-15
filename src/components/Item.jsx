import React, { useState } from 'react'
import { ItemCount } from './Itemcount/ItemCount'
import { Button } from './Button'
import ItemDetailContainer from './ItemDetailContainer'
import { Link }  from 'react-router-dom'
export const Item = ({producto}) => {
   const [isVisible, setIsVisible]= useState(false)
  const mostrarDetalles =(id)=>{
    setIsVisible(true)

  }
  return (
    <div className='card'>
        <h3>{producto.nombre}</h3>
        <img src={producto.image} alt="" />
        <p>{producto.precio}</p>
        <p>{producto.categoria}</p>
        <Button color="blue" funcion={mostrarDetalles}>
          <Link to={'/detalle/'+ producto.id}>Ver Detalles</Link>
          </Button>
        <ItemCount/>
    {
      isVisible ? <ItemDetailContainer id={producto.id}/> : <p>dale click</p>
    }
    </div>
  )
}


