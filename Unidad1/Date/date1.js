//Crea un programaque pida el número de días que
// quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).
// const argumentos = process.argv.slice(2);

var fecha_inicio = new Date(); //Guardamos en la variable la fecha actual
var fecha_fin = new Date("2023-06-24") //Guardamos en la variable la fecha que queremos saber cuantos días hay de diferencia.
var diferencia = fecha_inicio - fecha_fin; //Guardamos la diferencia en milisegundos entre las fechas.

let diferenciaDias = Math.floor(diferencia / (1000*60*60*24)); // dividimos los milisegundos entre el resultado de la multiplicacion entre
                                                                //los milisegundos, segundos, horas y dias, con el Math.Floor lo redondeamos 
console.log(diferenciaDias);