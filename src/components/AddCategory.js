import React, {useState} from 'react'
import PropTypes from 'prop-types';

// Este componete se encarga de agregar al elemento que se escriba en el input


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    // Manejador del cambio del input
    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // Para evitar que el submit recargue toda la pagina como se hacia antiguamente
        e.preventDefault();
        
        if ( inputValue.trim().length > 2 ) {
            // Tengo cats que es un callback con el estado anterior
            setCategories( cats => [inputValue, ...cats, ]);
            setInputValue('')
        }
    }

    return (
        <>
        <form onSubmit={ handleSubmit }>
            
            <input
            type="text"
            // Valor inicial
            value={inputValue}
            // Cuando eso cambia se actualiza
            onChange={ handleInputChange }
            />

        </form>
 
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

