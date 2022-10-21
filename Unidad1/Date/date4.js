//Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:
// 14:35:07 (hora detallada con minutos y segundos)
// 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)
const prompt=require("prompt-sync")({sigint:true});

const formato = prompt("Que tipo de formato quieres para ver la hora");
var fecha_actual = new Date();
/**
 * @switch Pedimos al usuario como quiere que se le muestre la fecha (formato)
 */

switch (formato) {
    case "Horadetallada":
        console.log(fecha_actual.getHours()+":"+fecha_actual.getMinutes()+":"+fecha_actual.getSeconds());
        break;
    case "HoraAMPM":
        if(fecha_actual.getHours() >= 12){
            console.log(fecha_actual.getHours()+":"+fecha_actual.getMinutes()+":"+fecha_actual.getSeconds()+"PM");
        }else{
            console.log(fecha_actual.getHours()+":"+fecha_actual.getMinutes()+":"+fecha_actual.getSeconds()+"AM");
        }
        break;
    default:
        break;
}
