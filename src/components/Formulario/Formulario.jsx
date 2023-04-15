import React from 'react'
import Titulo from '../Titulo/Titulo'


function Formulario() {
    let titulo= 'Formulario'
    let subTitulo= 'Complete el form '
  return (
    <section>
        <Titulo titulo={titulo} subTitulo={subTitulo}/>
        <form>
            <input  type='text' name='name' placeholder='Ingrese su nombre'/>
            <input  type='text' name='email' placeholder='Ingrese su email'/>
        </form>
    </section>
  )
}

export default Formulario