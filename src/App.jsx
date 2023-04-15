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


function App() {
  return ( 
    <div className="App">
      <NavBar />
      <Titulo  titulo='Titulo' subTitulo='SubTitulo'/>
      <Formulario />
      <ItemCount initial={1} stock={10} onAdd={(cantidad) => console.log('Cantidad agregada ', cantidad)}/>
    </div>
  );

}

export default App; 
