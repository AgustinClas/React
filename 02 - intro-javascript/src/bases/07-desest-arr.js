const personajes = ['Goku', 'Vegetta', 'Trunks'];

console.log(personajes[0]);

const [, p2, p3] = personajes;

console.log(p2, p3);

const retornaArray = () => {
    return['Abc', 123];
}

const [letras, numeros] = retornaArray();
console.log(letras, numeros);

const f = (valor) =>{
    return [valor, () => {console.log("Hola mundo")}];
}

const arr = f('Goku');

const [nombre, setNombre] = arr;
console.log(nombre);
setNombre();