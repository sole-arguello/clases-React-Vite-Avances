import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    //estados y funciones glob

    //agregar al carrito
    const [cartList, setCartList] = useState([])
    
    const addToCart = (newProduct) => {

        const exist = cartList.findIndex( prod => prod.id === newProduct.id)
        if (exist !== -1){
            const actualizar = [...cartList]
            actualizar[exist].cantidad += newProduct.cantidad
            setCartList(actualizar)
        }else{
            setCartList([
                ...cartList,
                newProduct
            ])
        }

    }

    //vaciar carrito
    const vaciarCarrito = () => { 
        setCartList([])
    }
    
    return (
        <CartContext.Provider value={{
           cartList,
           addToCart,
           vaciarCarrito, 

        }}>
            {children}
        </CartContext.Provider>
    )
}