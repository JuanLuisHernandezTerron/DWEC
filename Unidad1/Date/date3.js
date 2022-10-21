//Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:
// 15/10/2020
// Jueves, 15 de octubre de 2020.
// Thursday, October 15, 2020.
const prompt=require("prompt-sync")({sigint:true});

/**
 * Pedimos los datos por consola
 */
let dia = prompt("dime el dia");
let mes = prompt("dime el mes")-1;
let ano = prompt("dime el año");
/**
 * @var {Date} fecha Recogemos en esta variable la fecha actual
 */

var fecha = new Date(ano,mes,dia);
/**
 * @Object Creamos4 objetos donde guardamos los digitos con los días de la semana y mes, tanto en español como en ingles
 */
var arrayDias = {0: 'Domingo', 1:'Lunes', 2: 'Martes', 3: 'Miercoles', 4: 'Jueves' , 5: 'Viernes', 6: 'Sabado'};
var arrayMes = {0:"Enero",1:"Febrero",2:"Marzo",3:"Abril",4:"Mayo",5:"Junio",6:"Julio",7:"Agosto",8:"Septiembre",9:"Octubre",10:"Noviembre",11:"Diciembre"};

var arrayDiasING = {0: 'Sunday', 1:'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday' , 5: 'Friday', 6: 'Saturday'};
var arrayMesING = {0:"January ",1:"February ",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"Octuber",10:"November",11:"December"};

/**
 * @var formatoLargoESP Guardamos en variables las cadenas que devolveremos con las fechas en español
 * @var formatoLargoIngles Guardamos en variables las cadenas que devolveremos con las fechas en ingles
 */

var formatoLargoESP = arrayDias[fecha.getDay()]+","+dia+" de "+arrayMes[fecha.getMonth()]+" de "+fecha.getFullYear();
var formatoLargoIngles = arrayDiasING[fecha.getDay()]+","+arrayMesING[fecha.getMonth()]+" "+dia+" , "+fecha.getFullYear();

console.log(fecha.getDay());
console.log(formatoLargoESP);
console.log(formatoLargoIngles);



