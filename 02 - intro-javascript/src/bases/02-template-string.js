const nombre = "agustin";
const apellido = "clas";

const nombreCompleto = `${nombre} 
${apellido}`;

console.log(nombreCompleto);

function getSaludo($nombre){
    return "Hola " + $nombre;
}

console.log(`${getSaludo(nombre)}`);