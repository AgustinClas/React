import React, { useState } from "react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();

    let wrapper;

    beforeEach(() => {

        jest.clearAllMocks();

        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    
    });
    
    test('Debe mostrar los elementos de la manera correspondiente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    /* test('Debe de cambiar la caja de texto', () => {
      
        const input = wrapper.find('input');
      
        input.simulate('change', {target: {value : "Hola"}} );
        
    }); */
    
    
    test('No debe implementar setCategories', () => {
        
        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );
        
        expect( setCategories ).not.toHaveBeenCalled
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
      
        input.simulate('change', {target: {value : "Hola"}} );

        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));
        expect( input.prop('value').trim()).toBe('');


    });
    
    
  
});
