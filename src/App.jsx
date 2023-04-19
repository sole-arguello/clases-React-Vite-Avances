// app es una funcion que renderiza todo dentro del root

//estilos 
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//librerias
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


//componentes creados por mi 
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDitailContainer from './components/ItemDitailContainer/ItemDitailContainer';
import CartEjemplo from './components/CartEjemplo/CartEjemplo';


function App() {
  return ( 
    
    <Router>
      <NavBar />
      <Routes >
        <Route path='/' element={<ItemsListContainer greeting='Bienvenidos'/>} />
        <Route path='/categoria/:cid' element={<ItemsListContainer greeting='Categorias'/>} />

        <Route path='/detail/:pid' element={<ItemDitailContainer greeting='Un producto jarcodeado' />} />
        <Route path='/cartEjemplo' element={<CartEjemplo/>} />
        
        <Route path='*' element= { <Navigate to='/' />} />
      </Routes>
      
      {/* <Titulo  titulo='Titulo' subTitulo='SubTitulo'/>
      <Formulario /> */}
    
    </Router>


    
  );

}

export default App; 
