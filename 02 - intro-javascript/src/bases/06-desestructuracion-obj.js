//Desestructuracion

const persona = {
    nombre: 'agustin', 
    edad : 19,
    clave : '1234',
}


//const { nombre } = persona;
//const {nombre:nombre2} = persona; nombre2 -> variable

//const {nombre, edad, clave} = persona;

/* console.log(nombre);
console.log(clave);
console.log(edad); */

const retornaPersona = ({nombre, rango = 'capitan'}) => {
    //console.log(usuario);
    //const {nombre, edad, clave} = usuario;

    console.log(nombre, rango);
    //console.log(clave);
    //console.log(edad);
}

retornaPersona(persona);

const retornaPersona2 = ({clave, edad}) => {
    return {
        nombreCLAVE : clave,
        anios : edad,
        latlng :{
            lat : 123,
            lng : 456,
        },
    }
}

const {anios, nombreCLAVE, latlng:{lat,lng}} = retornaPersona2(persona);

console.log(anios);
console.log(nombreCLAVE);
console.log(lat, lng);
