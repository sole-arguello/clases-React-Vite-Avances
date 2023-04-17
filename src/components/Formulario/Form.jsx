 import React from 'react'
 import Titulo from '../Titulo/Titulo'
 
 function Form ({ formData, handleOnChange, errors, validateForm }) {
    let titulo= 'Formulario'
    let subTitulo= 'Complete el form '

    const handleOnSubmit = ( event) => {
        event.preventDefault()
        if(validateForm()){
            console.log('enviado:', formData )
        }
    }
   return (
    <section>
        <Titulo titulo={titulo} subTitulo={subTitulo}/>
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="name" placeholder="ingrese el nombre"  value={formData.name}  onChange={handleOnChange}/>
            {errors && errors.name && <span>{errors.name}</span>}
            <input type="text" name="email" placeholder="ingrese el email" value={formData.email} onChange={handleOnChange}/>
            {errors && errors.email && <span>{errors.email}</span>}
            <button>Enviar </button>
        </form>
    </section>
   )
 }
 
 export default Form