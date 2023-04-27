import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    //estados y funciones glob

    //agregar al carrito
    const [cartList, setCartList] = useState([])
    
    const addToCart = (newProduct, cantidad) => {
        //logica de prod repetido un if
        // if(!isInCart(newProduct.id)){
        //     setCartList(prev => [...prev, {newProduct, cantidad}])
        // }else{
        //     // cambiar alerta o un componente 
        //     console.log('El producto ya fue agregado')
        // }
        
        setCartList([
            ...cartList,
            newProduct
        ])
    }
    // //eliminar item
    // const removeItem = (itemId) => {
    //     const itemElim = cartList.filter(prod => prod.id !== itemId )
    //     setCartList(itemElim)
    // }



    //vaciar carrito
    const vaciarCarrito = () => { 
        setCartList([])
    }

    // const isInCart = (itemId) => {
    //     return cartList.some(prod => prod.id === itemId)
    // }

    //cantidad total
    //precio total 
    
    return (
        <CartContext.Provider value={{
           cartList,
           addToCart,
           //vaciarCarrito, 
        //    removeItem,

        }}>
            {children}
        </CartContext.Provider>
    )
}