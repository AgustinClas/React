import React, { useState } from "react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';


describe('Pruebas en GifExpertApp', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(<GifExpertApp />);

    
    });
    
    test('Debe mostrar los elementos de la manera correspondiente', () => {

        expect( wrapper ).toMatchSnapshot();

    });
})