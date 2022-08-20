import React, { useState } from "react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en GifGrid', () => {

    const category = "Dragon Ball";

    let wrapper;

    /* beforeEach(() => {

        const gifs = [{id : 'abc', url: 'https://cualquiercosa.com/cosa.jpg', title: 'cualquierCosa'}];

        useFetchGifs.mockReturnValue({
            loading : false,
            data: gifs
        })

        wrapper = shallow(<GifGrid category = { category }/>);
    
    }); */
    
    test('Debe mostrar los elementos de la manera correspondiente', () => {


        useFetchGifs.mockReturnValue({
            loading : true,
            data: []
        })

        wrapper = shallow(<GifGrid category = { category }/>);

        expect( wrapper ).toMatchSnapshot();

    });

    
    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{id : 'abc', url: 'https://cualquiercosa.com/cosa.jpg', title: 'cualquierCosa'},
        {id : 'abc', url: 'https://cualquiercosa.com/cosa.jpg', title: 'cualquierCosa'}];
        
        useFetchGifs.mockReturnValue({
            loading : false,
            data: gifs
        })
        
        wrapper = shallow(<GifGrid category = { category }/>);
        
        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe( false );
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length);

        
    });
    
    test('debe mostrar el titulo enviado como parametro', () => {
        
        const categoryAux = wrapper.find('h3').text().trim();
    
        expect(categoryAux).toBe(category);
    });
})