import React, { useState } from 'react'
import { ItemCount } from './Itemcount/ItemCount'
import { Button } from './Button'

import { Link }  from 'react-router-dom'

export const Item = ({producto}) => {
   const [isVisible, setIsVisible]= useState(false)
  
   const mostrarDetalles =()=>{
    setIsVisible(true)

  }
  return (
        <div className='card'>
        <h3>{producto.nombre}</h3>
        <img className="imagen"src={producto.image} alt="" />
        <p>{producto.precio}</p>
        <p>{producto.categoria}</p>
        <ItemCount />
        <Button color="white" funcion={mostrarDetalles}>
          
        <Link to={`/detalle/${producto.id}`}>Ver Detalles</Link>
        </Button>
          
        
  
    
    </div>
  )
}


