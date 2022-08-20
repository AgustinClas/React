import React from "react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from "../CounterApp";

describe('Pruebas en CounterApp', () => {
    
    let wrapper;

    beforeEach(() =>{
        //reiniciamos el componente antes de cada test
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar <CounterApp /> correctamente', () => {        

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto de 100', () =>{

        const wrapper = shallow(<CounterApp numero={100} />);

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('100');
    })

    test('debe incrementar contador con el boton +1', () => {
        
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        //Valor por defecto 1 + click en +1 = 2
        expect( counterText ).toBe('2');

    })

    test('debe restar contador con el boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();


        expect( counterText ).toBe('0');

    })

    test('debe resetear el contador', () => {

        const wrapper = shallow(<CounterApp numero={100} />);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        //.trim para recuperar { variable } sin espacios
        const counterText = wrapper.find('h2').text().trim();


        expect( counterText ).toBe('100');

    })

    
})