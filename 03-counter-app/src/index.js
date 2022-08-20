import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

//obtenemos el objeto
const divRoot = document.querySelector('#root');

//ReactDOM.render(<PrimeraApp saludo = "Hola Agustin"/>, divRoot);
ReactDOM.render(<CounterApp numero = {5}/>, divRoot); 

