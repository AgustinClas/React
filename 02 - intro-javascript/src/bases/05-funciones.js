//funciones

const saludar = function(nombre){
    return "Hola " + nombre;
}

console.log(saludar('Agustin'));

console.log(saludar);

const saludar2 = (nombre) =>{
    return "Hola " + nombre;
}

console.log(saludar2('Agustin'));

const saludar3 = (nombre) => "Hola " + nombre;

console.log(saludar3('Agustin'));


/* const getUser = () => {
    return{
        uId : '1',
        userName : 'agus02',
    }
 } */

 const getUser = () => ({
    
    uId : '1',
    userName : 'agus02',

})

 console.log(getUser());

 //Tarea

function getUsuarioActivo(nombre){
     return{
         id: 'abc',
         userName: nombre,
     }
 } 


 const usuarioActivo = getUsuarioActivo("Agustin");

 console.log(usuarioActivo);

 //tranformar a funcion de flecha
 //tiene que retornar un objeto implicito


 const getUsuarioActivo2 = (nombre) => ({
    
        id: 'abc',
        userName: nombre,
    
});

const usuarioActivo2 = getUsuarioActivo2("Agustin2");

 console.log(usuarioActivo2);



