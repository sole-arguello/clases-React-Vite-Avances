//inline con fragment <> </>
// mantiene el mismo nodo como padre y y modifica su children, en este caso los textos
//optimizando ya que no hay desmonatje

// HACE DESMONTAJE
export const TextComponent2 = ({condicion = false}) => {
  return (
    //podria ser remplazada condicion por admin para preguntar
    <>
       <button className="btn btn-outline-danger"> Para Todos </button>
       {condicion && <button className="btn btn-outline-danger"> Admin</button>}
       {!condicion && <button className="btn btn-outline-primary">No admin</button>}
    </>
  )
}
