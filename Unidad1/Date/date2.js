//Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños 
//va a caer en domingo desde este año hasta el año 2100.

const argumentos = process.argv.slice(2);
    console.log("argumentos",argumentos)
    prompt("dime la fecha de tu cumlpeaños")
    var contadorCumpleanos = 0;
    var fecha_fin = "2100-01-01";
    var fecha_inicio = argumentos;



