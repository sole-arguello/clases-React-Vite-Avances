import React from 'react'
import { useCartContext } from '../../context/CartContext'

function CartEjemplo() {

  const {cartList, vaciarCarrito, removeItem} = useCartContext()

  return (
    <div>

      {
      
      cartList.map(prod => (
        // <div>
        //   <img className='w-25' src={prod.img}/>
        //   <p>Cantidad: {prod.cantidad}</p>
        //   <button >X</button>
        // </div>

      <div className='d-lg-flex justify-content-around' >
      <img src ={prod.img} className='w-25'/>
      <p>{prod.categoria} {prod.titulo}</p>
      <p>$ {prod.precio}</p>
      <p>Cantidad: {prod.cantidad}</p>
      <button onClick={() => removeItem(prod.id)}>X</button>
      <p>SubTotal: {prod.precio * prod.cantidad}</p>
      </div>

    ))}
    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default CartEjemplo