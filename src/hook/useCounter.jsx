import { useState } from "react"

export const useCounter = (initial, min, max) => { 
    const [ cantidad, setCantidad ] = useState (initial)
  
    const sumar = () => {
      if (cantidad < max) {
        setCantidad(cantidad + 1)
      }
    }
  
    const restar = () => {
      if (cantidad > min) {
        setCantidad(cantidad - 1)
      }
    }
    return { cantidad , sumar, restar }
  
  }





