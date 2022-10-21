//Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños 
//va a caer en domingo desde este año hasta el año 2100.
const prompt=require("prompt-sync")({sigint:true});

/**
 * @param fecha_fin - Guardamos la fecha limite
 * @param fecha_ini - Guardamos la fecha inicial
 * @author Juan Luis
 */
var anoCumpleano = Number(prompt("En que año naciste"));
var mescumpleano = Number(prompt("En que mes naciste"));
var diacumpleano = Number(prompt("En que dia naciste"));
debugger
var fecha_ini = new Date(anoCumpleano+"-"+mescumpleano+"-"+diacumpleano);
var fecha_fin = new Date("2100-01-01");
console.log(fecha_ini)
console.log(fecha_fin)
/**
 * @while En este bucle hasta que llegue a la fecha fin, estaremos vigilando que cuando el dia 20 caíga en domingo, nos muestre el año,
 * mientra fuera estaremos sumando un año mas al año inicial
 */
while(fecha_ini.getFullYear() <= fecha_fin.getFullYear()){
    
    if(fecha_ini.getDay() == 0){
        console.log(fecha_ini.getFullYear());
    }
    fecha_ini.setFullYear(fecha_ini.getFullYear()+1);    
}







