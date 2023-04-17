// app es una funcion que renderiza todo dentro del root

//estilos 
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//librerias 

//componentes creados por mi 
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import ItemCount from './components/ItemCount/ItemCount';
import ItemsContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDitailContainer from './components/ItemDitailContainer/ItemDitailContainer';

function App() {
  return ( 
    <>
      <NavBar />
      <Titulo  titulo='Titulo' subTitulo='SubTitulo'/>
      <Formulario />
      <ItemsContainer greeting='Bienvenidos'/>
      <ItemDitailContainer greeting='Un producto jarcodeado' />
    </>
  );

}

export default App; 
