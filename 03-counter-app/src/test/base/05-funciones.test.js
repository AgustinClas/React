import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones';
import '@testing-library/jest-dom';

describe('Pruebas en 05-funciones', () => {

    test('debe retornar un objeto', () =>{

        const usuarioTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const usuario = getUser();

        //toEqual para comparar objetos
        expect(usuarioTest).toEqual(usuario);
    })

    test('getUsuarioActivo debe retornar un objeto', () =>{

        const nombre= "Agustin";

        const usuarioTest = {
            uid: 'ABC567',
            username: nombre
        }

        const usuario = getUsuarioActivo(nombre);

        //toEqual para comparar objetos
        expect(usuarioTest).toEqual(usuario);
    })

    
})