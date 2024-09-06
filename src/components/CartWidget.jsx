import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const  {cart} = useContext(CartContext)
  return (
    <div className='logocarrito'> 🛒
    <Link to='/cart'>
    <span> {cart.length}</span>
    </Link>
    </div>
  )

}

export default CartWidget
