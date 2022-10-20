//Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:
// 15/10/2020
// Jueves, 15 de octubre de 2020.
// Thursday, October 15, 2020.
const prompt=require("prompt-sync")({sigint:true});

let dia = prompt("dime el dia");
let mes = prompt("dime el mes");
let ano = prompt("dime el año");

var fecha = new Date(ano,mes,dia);
var arrayIngles = {0: "Sunday",1: "Monday",2: "Tuesday",3: "Wednesday",4: "Thursday",5: "Friday",6: "Saturday"};
var arrayDias = {0: "Domingo", 1:"Lunes", 2: "Martes", 3: "Miercoles", 4: "Jueves" , 5: "Viernes", 6: "Sabado"};
var arrayMes = {0:"Enero",1:"Febrero",2:"Marzo",3:"Abril",4:"Mayo",5:"Junio",6:"Julio",7:"Agosto",8:"Septiembre",9:"Octubre",10:"Noviembre",11:"Diciembre"};
debugger
var formatoLargoESP = arrayDias[fecha.getDay()]+","+dia+" de "+arrayMes[fecha.getMonth()]+" de "+fecha.getFullYear();
console.log(fecha.getDay())
var formatoLargoINGLES = arrayDias[fecha.getUTCDay()]+","+dia+" , "+arrayMes[fecha.getMonth()]+" , "+fecha.getFullYear();

console.log(formatoLargoESP);
console.log(fecha.toLocaleDateString());




