import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to="/">
      <h2>Tienda</h2>
      </Link>
      <CartWidget/>
      <div className='cat'>
      <Link to='/categoria/tortas'>tortas</Link>
      <Link to='/categoria/galletas'>galletas</Link>
      <Link to='/categoria/alfajor'>Alfajor</Link>
      </div>    
    </nav>
  )
}


