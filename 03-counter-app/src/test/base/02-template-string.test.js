import {getSaludo} from '../../base-pruebas/02-template-string';
import '@testing-library/jest-dom'

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe retornar Hola Agustin', () =>{

        const nombre = "Agustin";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe retornar Hola Carlos si no hay argumento', () =>{

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos' );
    })
})