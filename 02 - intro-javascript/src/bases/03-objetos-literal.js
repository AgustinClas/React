const persona = {
    nombre: "Agustin",
    apellido: "Clas",
    edad: "19",
    direccion: {
        ciudad: 'New York',
        zip: 1234,
        lat: 1.123,
        lng: 2.345
    },
};

console.log(persona.nombre);
console.table({persona});

//De esta manera se asigna la referencia en memoria
const persona2 = persona;

//modificamos persona y persona2
persona2.nombre = "Carlos";

console.log(persona);

//forma correcta

const persona3 = {...persona2};
persona3.nombre = "Agustin";

console.log(persona2);