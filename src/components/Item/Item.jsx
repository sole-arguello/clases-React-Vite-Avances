import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'

function Item( {id, titulo, img, precio} ) {
  return (

    <CardGroup className='col-lg-3 col-md-6 col-sm-10'>
        <Card className="card w-100 mh-100"  key={id}>
            <Card.Img variant="top" src={img} alt="imagen card" />
            <Card.Body>
              <Card.Title className='fs-4'>{titulo}</Card.Title>
              <Card.Text>Precio: ${precio}</Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
              <Button variant="outline-warning text-secondary">Ver Detalle</Button>
            </Card.Footer>
        </Card>
    </CardGroup>
    

  )
}

export default Item