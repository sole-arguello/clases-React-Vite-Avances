import React from 'react'
import { useCartContext } from '../../context/CartContext'

function CartEjemplo() {

  const {cartList, vaciarCarrito} = useCartContext()

  return (
    <div>
      {cartList.map(prod => (
        <div>
          <img className='w-25' src={prod.img}/>
          <button >X</button>
        </div>

    ))}
    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default CartEjemplo