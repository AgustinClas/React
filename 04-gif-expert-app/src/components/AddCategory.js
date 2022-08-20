import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log("Handle input change");
    }

    const handleSubmit = (e) => {
        //evito el refresco del navegador
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue("");
        }
    }

    return (
        
        <form onSubmit= {handleSubmit}>
            <input type="text" id="1" value = { inputValue } onChange={handleInputChange}/>
            
        </form>
    )
}

//Forzamos a utilizar el componente con la funcion setCategories de manera obligatoria
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
