import React, { useContext } from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 
import { ThemeContext } from '../context/ThemeContext';

export const NavBar = () => {
  
   const { mensajito } = useContext(CartContext);  
  
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <nav className='nav'>
      <Link to="/">
        <h2 className='tienda'>Tienda</h2>
      </Link>
      <CartWidget />
      <div className='cat'>
        <Link className='categoria' to='/categoria/tortas'>tortas</Link>
        <Link className='categoria' to='/categoria/galletas'>galletas</Link>
        <Link className='categoria' to='/categoria/alfajor'>Alfajor</Link>
       
        
        {mensajito && <h3>{mensajito}</h3>} 
        <button onClick={() => setDarkTheme(!darkTheme)} aria-label="Cambiar modo oscuro o claro">cambiar modo</button>
      </div>    
    </nav>
  );
};