import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from './Itemcount/ItemCount'


export const ItemDetail = ({ prod }) => {
  
  const {cart, addToCart} =useContext(CartContext)
  
  //console.log(cart)
  
  //const [id, setId] = useState(prod.id);
  
  //const mostrarAnterior=()=>{ 
   // setId (id -1)
  
 //  } 
  //const mostrarSiguiente=()=>{ 
   // setId (id + 1)
  
  // } 
 

   const handleAddToCart = (cant) =>{
    const prodConCantidad= {...prod, cantidad: cant}
    addToCart(prodConCantidad)
   }
    return (
    <div className='card'>
        
      <h3>{prod.nombre}</h3>
      <img src={prod.image} alt="" />
    <p>{prod.precio}</p>
    
    
    <ItemCount handleAddToCart={handleAddToCart}/>
    
   
    
    
    
    </div>
  )
}

