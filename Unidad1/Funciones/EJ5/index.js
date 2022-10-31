/**
 * @param {*} horaAutomatica Tendremos una funcion donde mostraremos en el div del html la hora digital (hora,minuto,segundo)
 * @param {*} fechaActual Guardaremos en esta variable la fecha actual
 * @param {*} relojDigital En esta variable guardaremos la hora digital, donde cojeremos de la fecha actual la hora, minutos y segundos
 */
let horaAutomatica = function () {
    var fechaActual = new Date();
    var relojDigital = (fechaActual.getHours() + ":"+fechaActual.getMinutes()+":"+fechaActual.getSeconds());
    document.getElementById("hora").innerHTML = relojDigital;
}
/**
 * Tendremos que cada vez que pase 1 segundo (1000 milisegundo) llamaremos a la variable horaAutomatica que contiene la funcion para que nos muestre la hora
 */
setInterval(horaAutomatica,1000)