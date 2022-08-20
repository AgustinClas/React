import React from "react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from "../../components/GifGridItem";

describe('GifGridItem', () => {

    const title = "titulo";
    const url = "https://localhost/foto.jpg"

    const wrapper = shallow(<GifGridItem title = {title} url = {url}/>);

    test('debe mostrar <GifGridItem/> correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe mostrar un parrafo con el titulo', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    })

    test('debe coincidir los valores cargados en la imagen', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);


    })

    test('debe tener la clase correspondiente', () => {

        const div = wrapper.find('div');
        const className = div.prop("className");
        expect(className.includes('animate__fadeInDown')).toBe(true);
    });
    
});
