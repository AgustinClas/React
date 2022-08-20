const activo = true;


//const mensaje = (activo) ? 'Activo' : 'inactivo';
const mensaje = !activo && 'activo';

console.log(mensaje);