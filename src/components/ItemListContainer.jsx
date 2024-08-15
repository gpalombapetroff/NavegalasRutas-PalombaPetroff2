import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { getProducts } from '../asyncmock'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({greeting}) => {
const [items, setItems] = useState([])
const [cargando, setCargando] = useState(true)
const {categoria} = useParams()
console.log(items)
useEffect(() => {
    setCargando(true)
    if (categoria){
    getProducts().then(prods =>setItems(prods.filter(e => e.categoria === categoria))) 
.catch(err=>err)
.finally(() => setCargando (false))
}else{
getProducts().then(prods =>setItems(prods)) 
.catch(err=>err)
.finally(() => setCargando (false))
}
},[categoria])

if(cargando){
    return(
        <h3>cargando...</h3>
    )
}
    
    return (
    <div className="hola" > {greeting} 
    <ItemList items={items}/>
    </div>
    
)
}


