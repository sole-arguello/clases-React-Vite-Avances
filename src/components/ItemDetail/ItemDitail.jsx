import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'


import { Card, Container } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useParams } from 'react-router-dom'


//remplazo {id, img, titulo, precio} por product
function ItemDitail({product}) {
  // const { pid } = useParams()
  // console.log(pid)
   //clase 13
  const [isCant, setIsCant] = useState(false)
  const { addToCart, cartList} = useCartContext()  

  const handleOnAdd = (cantidad) => {
    addToCart({...product, cantidad} )
    setIsCant(true)
    //console.log('Cantidad agregada ', cantidad)
  }
  console.log(cartList)
  return (
    <Card className='container d-flex flex-md-row py-3'>
        
        <Card.Img variant='' src={img} alt="imagen del producto" />
        <Container className=''>
          <Card.Title className='fs-4 '>{titulo}</Card.Title>
          <Card.Text className='fs-5'>Precio: ${precio}</Card.Text>
            <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam natus dolore praesentium officiis! In nam aperiam atque tenetur, 
                labore alias est ipsum quas, molestiae accusamus rerum! Molestias 
                architecto tempora odit?
            </Card.Text>

            {//clase 13 valido que si hay cantidad 
            isCant
            ? <>
                <Link to="/cartEjemplo" className='btn btn-outline-danger mx-2' >Terminar Compra</Link>
                <Link to="/" className='btn btn-outline-success'>Continuar Compra</Link>
              </>
            : <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/> 
            }
            
        </Container>
        
    </Card>
  )
}

export default ItemDitail