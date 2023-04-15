// app es una funcion que renderiza todo dentro del root
//librerias 
import { useRef, useState } from "react";
import { useEffect } from "react";

//componentes creados por mi 
import NavBar from "./components/NavBar/NavBar";
//import Titulos from "./components/Titulos/Titulos";
//import ItemsCount from "./components/ItemsCount/ItemsCount";
import ItemsContainer from "./components/ItemsListContainer/ItemsListContainer";
import ItemDitailContainer from "./components/ItemDitailContainer/ItemDitailContainer";
import ItemCount from "./components/ItemCount/ItemCount";

import BoxEjemplo from "./components/BoxEjemplo/BoxEjemplo";
//estilos 
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formulario } from "./components/Formulario/Formulario";




// const Container = () => {
//   return(
//     //envio la props
//     <BoxEjemplo titulo='Soy un titulo enviado a box desde container'>
//       {/* lo inyecto con children en el componente box */}
//         <p>Contenido personalizado</p>      
//     </BoxEjemplo>
//   )
// }

function App() {
  return ( 
    <div className="App">
      <NavBar />
      
      <ItemsContainer greeting={'Bienvenidos'}/>
      {/* para acceder es por medio de children */}
         {/* <ItemCount />  */}
      {/* </ItemsContainer> */}

      {/* <ItemDitailContainer greeting={'Un producto jarcodeado'} /> */}
      {/* <Formulario /> */}
      {/* <Container /> */}
      {/* <ItemCount initial={1} stock={10} onAdd={(cantidad) => console.log('Cantidad agregada ', cantidad)}/> */}
      
      {/* <Titulos titulo='ecomerce' subTitulo='AlaCachufleta'/>  */}
      {/* <Formulario /> */}
      {/* <button onClick={handleBooleano}>Me Gusta</button>
      
      <div ref={divRef}>Contenido Actual</div>
      <button onClick={handleClick}>Cambiar el Contenido</button> */}
    </div>
  );

//   const [ booleano, setBooleano ] = useState(true); 
//   const [ contenido, setContenido ] = useState('Actual')
//  //accedo al dom pero no renderiza pero persiste los datos
//   const divRef = useRef(null)

//   useEffect( () => {
//     //console.log('1- Se ejecuta siempre en cada render')
//     console.log("window.addEventListener('evento', function)")
//     return () => {
//       console.log('efecto de limpieza - window.removeEventListener("evento", function) ')
//     }
//   })

//   // useEffect( () => {
//   //   //se ejecuta una sola vez en el mount
//   //   console.log('2- Una sola vez la Llamada a la api -Mock(simulacion)-')
//   // }, [])

//   // useEffect( () => {
//   //   //se ejecuta una sola vez en el mount
//   //   console.log('3- Cada vez que cambia algo del array de dependecia')
//   // }, [contenido, booleano])


//   console.log(divRef)
//   let handleClick = () => {
//     divRef.current.innerHTML = 'Nuevo contenido'
//     setContenido('Nuevo')
//   };

//   let handleBooleano = () => {
//     setBooleano(!booleano)
//   }
  
  //console.log('4- Renderizado de app')

}

export default App;
