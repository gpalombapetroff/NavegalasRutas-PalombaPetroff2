import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import  CartItem  from './CartItem'; 
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, vaciarCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((producto) => (
          <CartItem key={producto.id} producto={producto} />
        ))
      )}
      <button className="vaciar-cart-button" onClick={vaciarCart}>
  Vaciar carrito
</button>
<Link to='/Checkout' className="checkout-link">
  Terminar Compra
</Link>
    </div>
  );
};

export default Cart;