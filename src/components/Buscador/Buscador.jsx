import { useState } from 'react'

function Buscador ( { children } ) {
    const [ filterState, setFilterState ] = useState('')

    const handleFilterChange = (evt) => {
        setFilterState(evt.target.value)
    }
    return children ( { filterState, handleFilterChange } )
}
export default Buscador