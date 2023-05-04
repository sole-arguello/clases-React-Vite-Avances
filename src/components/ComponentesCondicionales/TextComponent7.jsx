//condiciones multiples

export const TextComponent7 = ({stock = 1, otro = 'border-danger'}) => {

  return (
    <>
        <h2 className= { 
            `${ stock !== 0 ? 'alert alert-success' : 'alert alert-danger' } ${ otro || ''}`}>
             Stock </h2>
             {/* <h2>{stock === 0 ? 'No hay' : 'Si hay'}</h2> */}
    </>
  )
}
