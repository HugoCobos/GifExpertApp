import React, { useState } from 'react'
import PropTypes from 'prop-types';
// Recibimos el setCategory del arreglo en GifExpertApp
export const AddCategory = ( { setCategory } ) => {
    // useState es para asignar un valor y con el setState hace que renderice el DOM 
    // cada que hay un cambio y ese mismo se le asigna, en este caso tambien anexa el valor
    const [InputValue, setInputValue] = useState('');

    // funcion para que el input cambine, o sea, que cada letra se vaya anexando
    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    // funcion para el submit del formulario, se le anexa al setCategory el valor que entro al formulario
    const handleSubmit = e => {
        // hacemos que el evento del form no renderice la pagina
        e.preventDefault();
        // validamos que no tenga espacios vacios y que el minimo de caracteres sea de 2
        if (InputValue.trim().length > 2) {
            // se hace una capio del valor original y como segundo parametro se le anexa el valor que mandaron por el form
            setCategory( cat => [ InputValue, ...cat] );
            // cuando todo se cumple el input queda vacio
            setInputValue('')
        }
    }

    return (
        <>
        <h3>Ingresa una categoria</h3>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={InputValue}
                onChange={ handleChangeInput }
            />
        </form>
        </>
    )
}
// hacemos que sea requerido el argumento que ocupa la funcion principal (AddCatgory)
AddCategory.propTypes ={
    setCategory:PropTypes.func.isRequired 
}