import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => { 
    
    const [cart, setCart] = useState([]);

    const addToCart = (prod) => {
        setCart((prevCart) => [...prevCart, prod]);
    };
 const vaciarCart = () =>{
    setCart([])
 }

 const eliminarProducto = (id) =>{
    const newCart = cart.filter(e => e.id !== id);
    setCart (newCart)
 }
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, vaciarCart, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    );
};