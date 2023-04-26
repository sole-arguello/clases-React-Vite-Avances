import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'


import { Card, Container } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useParams } from 'react-router-dom'



function ItemDitail({id, img, titulo, precio}) {

  // const { pid } = useParams()
  // console.log(pid)
  
  const [isCant, setIsCant] = useState(true)
  const { addToCart, cartList} = useCartContext()  

  const handleOnAdd = (cantidad) => {
    addToCart({id, img, titulo, precio},cantidad)
    setIsCant(false)
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

            {//valido que si hay cantidad 
            isCant
            ? <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/> 
            :<>
             <Link to="/cartEjemplo" className='btn btn-outline-danger mx-2' >Terminar Compra</Link>
             <Link to="/" className='btn btn-outline-success'>Continuar Compra</Link>
            </>
            }
            
        </Container>
        
    </Card>
  )
}

export default ItemDitail