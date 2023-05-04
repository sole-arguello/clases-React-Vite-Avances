import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductoById } from "../../utils/mFetch";
import ItemDitail from '../ItemDetail/ItemDitail'
import Loading from '../Loading/Loading';



function ItemDitailContainer( {greeting} ) {

    const { pid } = useParams()
    //console.log(pid)

    const [ producto, setProducto ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
      setTimeout( () => {
        getProductoById(pid)
        .then( ( resultado ) => {
            setProducto(resultado)
            //console.log(producto)
        })
        .catch( (err) => console.log(err))
        .finally(() => setIsLoading(false))
      }, 2000)  
    }, [])

  return (
    <div>
        <h1 className='py-5 text-center'>{ greeting }</h1>
        { isLoading

        //  ? <p>Cargando el producto...</p> 
        ? <Loading/>
        : <ItemDitail {...producto}/> }
    </div>
  )
}

export default ItemDitailContainer