import { useEffect, useState } from "react";
import { Container, Button, Card, CardGroup } from 'react-bootstrap'
import { getDoc, doc, getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { getProductos } from "../../utils/mFetch";
import { TextComponent1 } from "../ComponentesCondicionales/TextComponent1";
import { TextComponent2 } from "../ComponentesCondicionales/TextComponent2";
import { TextComponent3 } from "../ComponentesCondicionales/TextComponent3";

import ItemList from "../ItemList/ItemList";
import Buscador from "../Buscador/Buscador";
import Loading from "../Loading/Loading";
import { TextComponent5 } from "../ComponentesCondicionales/TextComponent5";
import { TextComponent6 } from "../ComponentesCondicionales/TextComponent6";
import { TextComponent7 } from "../ComponentesCondicionales/TextComponent7";
import { TextComponent8 } from "../ComponentesCondicionales/TextComponent8";



// clase 13 
// const Loading2 = () =>{
//     useEffect( () =>{
//       console.log('Acciones loading')
//       return () => {
//         console.log('Loading desmontado')
//       }
//     })
//     return <h2>Cargando...</h2>
//   }

function ItemsListContainer({ greeting }) {
    
    const [productos, setProductos ] = useState([])
    //clase 12
    const [isLoading, setIsLoading ] = useState(true)
    const [meGusta, setMeGusta] = useState(true)

    useEffect(() => {
        setTimeout(() => {
        //  getProductos()
        //     .then((resultado) => {
        //         setProductos(resultado)
        //     })
        //     .catch((error) => console.log(error))
        //     .finally(() => setIsLoading(false));

          //clase 12 remplazo el mock 
          const dbFirestore = getFirestore()//apunto a firestore dentro de firestore
          const queryCollection = collection(dbFirestore, 'productos')
          //traigo todos los productos
          getDocs(queryCollection)                                    //al id lo obtengo por asignacion
            .then(resp => setProductos(resp.docs.map( producto => ( { id: producto.id, ...producto.data() } ))))
            .catch(err => console.log(err))
            .finally( () => setIsLoading(false))
        }, 1000);
    }, [])

    //traer por filtrado
    useEffect( () =>{
      const dbFirestore = getFirestore()//siempre apunto a firestore dentro de firestore
      const queryCollection = collection(dbFirestore, 'productos')

      const queryCollectionFiltered = query(queryCollection, where('precio', '==', '900'))

      getDocs(queryCollectionFiltered)                                    //al id lo obtengo por asignacion
        .then(resp => setProductos(resp.docs.map( producto => ( { id: producto.id, ...producto.data() } ))))
        .catch(err => console.log(err))
        .finally( () => setIsLoading(false))
    }, [])

    //clase 12 simular
    const handleMeGusta = () => {
      setMeGusta(!meGusta)
    }
    const agregarProducto = () => {
      setProductos([...productos, {id: '', categoria: productos.length+1, titulo: 'Nuevo', precio: 3500, cantidad: 100}] )
    }

    //clase 12 para ver el rendering
    console.log('ItemListContainer', productos)
    // const handleProductFiltered = ( { filterState, handleFilterChange } ) => (
    //     <Container className=" text-center"> 
    //       <h2>Buscar Producto</h2>
    //       {/* {filterState} */}
    //       <input  className="mb-5" type="text" value={filterState}  onChange={handleFilterChange}/>

    //         <Container className="row g-3 justify-content-center">
    //           {isLoading 
    //           ? <Spinner animation="border" variant="warning" /> 
    //           : <>
    //               {filterState === ''
    //               ? productos.map ( ( {id, precio, titulo, categoria, img } ) => 
    //                 <CardGroup className='col-lg-3 col-md-6 col-sm-10'>
    //                   <Card className="card w-100 mh-100"  key={id}>
    //                       <Card.Img variant="top" src={img} alt="imagen card" />
    //                       <Card.Body>
    //                         <Card.Title className='fs-4'>{titulo}</Card.Title>
    //                         <Card.Text>Precio: ${precio}</Card.Text>
    //                       </Card.Body>
    //                       <Card.Footer className="card-footer">
    //                         <Button variant="outline-warning text-secondary">Ver Detalle</Button>
    //                       </Card.Footer>
    //                   </Card>
    //                 </CardGroup>
    //               )

    //               : productos.filter( prod => prod.categoria.toLowerCase().includes( filterState.toLowerCase()) )
    //               .map( ( {id, precio, titulo, categoria, img } ) => 
    //               <CardGroup className='col-lg-3 col-md-6 col-sm-10'>
    //                 <Card className="card w-100 mh-100"  key={id}>
    //                     <Card.Img variant="top" src={img} alt="imagen card" />
    //                     <Card.Body>
    //                       <Card.Title className='fs-4'>{titulo}</Card.Title>
    //                       <Card.Text>Precio: ${precio}</Card.Text>
    //                     </Card.Body>
    //                     <Card.Footer className="card-footer">
    //                       <Button variant="outline-warning text-secondary">Ver Detalle</Button>
    //                     </Card.Footer>
    //                 </Card>
    //               </CardGroup>
    //               )
    //               }
    //           </>}
    //         </Container>

    //     </Container>
    // )
    return (
    <>
      <h1 className="py-5 text-center ">{greeting}</h1>

      <Container >
        <button className="btn btn-outline-success" onClick={agregarProducto}>Agregar producto</button>
        <button className="btn btn-success rounded-pill" onClick={handleMeGusta}> Me gusta </button>
          {isLoading 
          //clase 13
          // ? <Loading2 />
          ? <Loading />
          : <ItemList productos = {productos}/>}

        {/* ------------clase 13 ------------- */}
        {/* <TextComponent1/> */}
        {/* <TextComponent2 /> */}
         {/* <TextComponent3 /> */}
         {/* TextComponent4 lo trabaje en itemDitail loading*/}
         {/* <TextComponent5 /> */}
         {/* <TextComponent6 /> */}
         {/* <TextComponent7 /> */}
         {/* <TextComponent8 /> */}
      </Container>
      {/* <Buscador >
          { handleProductFiltered }
      </Buscador> */}
    </> 
    
  );
}

export default ItemsListContainer;
