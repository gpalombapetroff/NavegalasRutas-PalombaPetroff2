import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../servicios/firebaseconfig'

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    
    const [order, setOrder] = useState({})

    const {cart} = useContext(CartContext)
    
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
       const user = {
            nombre,
            mail,
            direccion
        }
        const data = {user, cart}
        const orderRef = collection(db, "ordenes")
        const orderId =await addDoc(orderRef, data)
       setOrder(orderId.id)
        // setOrder({user, cart})
    }
    console.log(order)
    
  return (
    <div className='card-container'>
  <div className='terminarcompra'>
    <h2>Terminar Compra</h2>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className='form-group'>
        <span>Nombre</span>
        <input type="text" className='espacio' onChange={(e) => setNombre(e.target.value)  }/>
      </div>
      <div className='form-group'>
        <span>Mail</span>
        <input type="email" className='espacio' onChange={(e) => setMail(e.target.value)  }/>
      </div>
      <div className='form-group'>
        <span>Dirección</span>
        <input type="text" className='espacio' onChange={(e) => setDireccion(e.target.value) }/>
      </div>
      <button type= 'submit'>Confirmar</button>
    </form>
  </div>
</div>

  )
}

export default Checkout
