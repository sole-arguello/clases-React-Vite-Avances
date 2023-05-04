//condicion temprana
// renderiza el resultado del return de nuestra funcion y cada return se transforma 
//en nuestro arbol de partida para proximos

// HACE DESMONTAJE
export const TextComponent1 = (user = false, children) => {
    if (!user){
        return <h1>Ud no puede ver este componente</h1>
    } 
  return (
    <div>
        <h2>Ud esta logueado puede ver la pagina</h2>
        {/* {children} */}
    </div>
  )
}
