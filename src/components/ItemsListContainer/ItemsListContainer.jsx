import { useEffect, useState } from "react";
import { Spinner, Container, Button, Card, CardGroup } from 'react-bootstrap'
import { getProductos } from "../../utils/mFetch";
import ItemList from "../ItemList/ItemList";
import Buscador from "../Buscador/Buscador";

function ItemsContainer({ greeting }) {
    
    const [productos, setProductos ] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => {
         getProductos()
            .then((resultado) => {
                setProductos(resultado)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 1000);
    }, [])

    const handleProductFiltered = ( { filterState, handleFilterChange } ) => (
        <Container className=" text-center"> 
          <h2>Buscar Producto</h2>
          {/* {filterState} */}
          <input  className="mb-5" type="text" value={filterState}  onChange={handleFilterChange}/>

            <Container className="row g-3 justify-content-center">
              {isLoading 
              ? <Spinner animation="border" variant="warning" /> 
              : <>
                  {filterState === ''
                  ? productos.map ( ( {id, precio, titulo, categoria, img } ) => 
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

                  : productos.filter( prod => prod.categoria.toLowerCase().includes( filterState.toLowerCase()) )
                  .map( ( {id, precio, titulo, categoria, img } ) => 
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
              </>}
            </Container>

        </Container>
    )
    return (
    <>
      <h1 className="py-5 text-center">{greeting}</h1>

      <Buscador >
          { handleProductFiltered }
      </Buscador>
    </> 
    
  );
}

export default ItemsContainer;
