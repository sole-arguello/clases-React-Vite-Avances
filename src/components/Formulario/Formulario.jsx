import { useState } from "react"
import Form from "./Form"
import { formWhitValidation } from "./formWhitValidation"

const FormWhitValidation = formWhitValidation ( Form )

export function Formulario () {
    const [formData, setFormData] = useState({  name: '' , email: ''})

    const handleOnChange = (event) => {
      setFormData({ ...formData, [ event.target.name ]: event.target.value })
    }

     return (
      <FormWhitValidation formData={formData} handleOnChange={handleOnChange}/>
     )
}

export default Formulario