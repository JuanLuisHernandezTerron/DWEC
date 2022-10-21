//Crea un programaque pida el número de días que
// quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).
// const argumentos = process.argv.slice(2);

/**
 * @param {string} fecha_inicio Guardamos la fecha actual
 * @param {string} fecha_fin Guardamos en esta variable la fecha cuando finalizamos el curso
 * @var {string} diferencia Guardamos la diferencia en milisegundos 
 */
var fecha_inicio = new Date(); 
var fecha_fin = new Date("2023-06-24") 
var diferencia = fecha_inicio - fecha_fin; 
/**
 * @let dividimos los milisegundos entre el resultado de la multiplicacion entre los milisegundos, segundos, horas y dias, y con el Math.Floor lo redondeamos 
 */
let diferenciaDias = Math.floor(diferencia / (1000*60*60*24)); 
console.log(diferenciaDias);