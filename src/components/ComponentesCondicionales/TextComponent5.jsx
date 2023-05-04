//Condicionales en estilos y no hay desmontaje
export const TextComponent5 = ({stock = 0}) => {// 0 es falso 1 verdadero

    const estiloComponent = {color: stock ? 'green' : 'red'}
  return (
    <>
        <h2 style={estiloComponent}> Stock </h2>
    </>
  )
}
