import React from "react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en PrimeraApp', () => {

    //No funciona porque cambiamos la configuracion de setupTest.js
    //con la config actual no existe toBeInTheDocument()

    /* test('debe mostrar el mensaje "Hola Agustin" ', () => {
        
        const saludo = "Hola Agustin";

        const { getByText } = render( <PrimeraApp saludo = { saludo }/> );

       expect(getByText( saludo )).toBeInTheDocument();
    }) */

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        
        const wrapper = shallow(<PrimeraApp saludo="Hola Agustin"/>);

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe mostrar el subtitulo enviado ', () => {
        const saludo = 'Hola Agustin';
        const subtitulo = "Como andas?";
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subtitulo );
    })
    
    
})
