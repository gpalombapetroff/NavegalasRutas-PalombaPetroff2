import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import './ItemCount.css'

    export const ItemCount = ({handleAddToCart}) => {
        const [count, setCount] = useState(0);
    
        const restar = () => {
            if (count > 0) { 
                setCount(count - 1);
            }
        };
    
        const sumar = () => {
            setCount(count + 1);
        };
    
    return (
    <div className="contador">
    <Button color="green" texto= "-" funcion ={restar} />
    <p>{count}</p>
    <Button color="green" texto="+" funcion={sumar} />
    <button onClick={()=>handleAddToCart(count)}>Agregar al carrito </button>
    </div> 
)
}

