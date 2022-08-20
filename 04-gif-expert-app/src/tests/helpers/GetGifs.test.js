import React from "react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con GetGifs`', () => {
  
    test('debe traer 5 elementos', async () => {
      
        const array = await getGifs("Boca");

        expect(array.length).toBe(5);
    });

    test('debe traer 0 elementos', async () => {

        const array = await getGifs("");

        expect(array.length).toBe(0);
    });
    
    
});
