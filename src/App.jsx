import './App.css';
import { Button } from './components/Button'; 
import { ItemCount } from './components/Itemcount/ItemCount'; 
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import { CartContextProvider } from './context/CartContext';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Checkout from './components/Checkout';

export function App() {
  const { darkTheme } = useContext(ThemeContext);
  
  return (
    <>
      <CartContextProvider>
        <div className={darkTheme ? "dark" : "light"}> 
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="hola" />} />
              <Route path='/contacto' element={<h1>contacto</h1>} />
              <Route path='/categoria/:categoria' element={<ItemListContainer />} />
              <Route path='/detalle/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<h1>Pagina no encontrada, volve al inicio.</h1>} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartContextProvider>
    </>
  );
}