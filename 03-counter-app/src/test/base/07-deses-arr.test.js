import {retornaArreglo} from '../../base-pruebas/07-deses-arr';
import '@testing-library/jest-dom';

describe('Pruebas en 07-deses-arr', () => {

    test('', () =>{
        
        const arr = retornaArreglo();//['ABC', 123]

        expect(arr).toEqual(['ABC', 123]);
        expect(arr[0]).toEqual('ABC');
        expect(typeof arr[1]).toBe( 'number' );
        
    })

})