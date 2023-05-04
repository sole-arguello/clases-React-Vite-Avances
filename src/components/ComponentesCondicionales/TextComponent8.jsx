//condicionales sobre props

export const TextComponent8 = ({condicion = false, otro = 'border-danger'}) => {
    const props = condicion
        ? { className: `alert alert-success ${ otro || '' }`,
            style: { color: 'red' },
            title: 'Este es el titulo see la condicion es verdadero',
            nombre: 'Sole' }
            
        : { className: `alert alert-warning ${ otro || '' }`,
            style: {color: 'green'}, }
  return (
    <>
        <h2 {...props}> Ud esta logueado puede ver la pag. </h2>
    </>
  )
}
