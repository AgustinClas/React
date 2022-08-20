import { getHeroeById } from "./bases/08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe');
    }, 2000)
});

promesa.then((heroe) => {console.log(heroe)});
promesa.catch(err => console.warn(err));
 */



const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const heroe = getHeroeById(id);
            
            if(heroe)
                resolve(heroe);
            else
             reject('No se pudo encontrar el heroe');

        }, 2000)
    });

}

getHeroeByIdAsync(15).then(heroe => console.log(heroe)).catch(mensaje => console.log(mensaje));
