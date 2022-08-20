import {getHeroeById, getHeroesByOwner} from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

import '@testing-library/jest-dom';

describe('Pruebas en 08-imp-exp', () => {
    
    test('debe retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );
    
        const heroeData = heroes.find( h => h.id === id );
    
        expect( heroe ).toEqual( heroeData );
    })

    test('debe retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );
    
        
    
        expect( heroe ).toBe( undefined );
    })

    test('debe retornar todos los heroes de un dueño', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)
    
        const heroesData = heroes.filter( (h) => h.owner === owner );
    
        expect( heroes ).toEqual( heroesData );
    })

    test('debe retornar todos los heroes de un dueño y verificar el largo del arreglo', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)
    
        const heroesData = heroes.filter( (h) => h.owner === owner );
    
        expect( heroes ).toEqual( heroesData );
        expect(heroes.length).toBe(2);
    })
    
})
