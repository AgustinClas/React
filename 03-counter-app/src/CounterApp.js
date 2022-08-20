//atajo rafcp
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({numero = 1}) => {
    
    const [counter, setCounter] = useState(numero);

    //handleAdd
    const handleAdd = () => {
        //setCounter(counter + 1); funciona

        //En caso de que no tengamos la variable counter 
        setCounter((c) => c + 1);
    }


    const handleSubtract = () => {
        setCounter((c) => c - 1);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={() => {handleAdd()}}> +1 </button>
            <button onClick={() => setCounter(numero)}> reset </button>
            <button onClick={() => {handleSubtract()}}> -1 </button>


        </>
    )
}

export default CounterApp;

CounterApp.propTypes = {
    numero: PropTypes.number
}