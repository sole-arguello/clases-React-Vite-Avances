// inline ternary
// Mantiene el mismo nodo como padre y modifica sus children, optimizando ya que no hay desmontaje


// NO HACE DESMONTAJE del nodo 
// export const TextComponent3 = ({condion}) => {

//   return (
//     <h2>{condion === true ? 'Condicion es verdadera'
//                           : 'Condicion es falsa' }</h2>
//   )
// }

//ejemplo 2
export const TextComponent3 = ({stock = 0}) => {

    return (
      <h2>{stock === 0 ? 'No hay Stock'
                       : 'Hay Stok' }</h2>
    )
  }