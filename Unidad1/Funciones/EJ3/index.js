// Calcular cuál es tu signo Egipcio que corresponde la página Signo del horóscopo Egipcio

// Debes preguntar por la fecha y utilizar el objeto Date en algún momento. Se deberá, así pues, preguntar por la fecha de nacimiento (año incluido).
// Deberéis utilizar una página con la descripción del dios que corresponda a vuestro signo. Mostrar en iframe.
// No se pueden utilizar arrays, debiendo encontrar otra solución que utilice switch

/**
 * @param {*} fechaNacimientoprompt Guardamos la fecha de nacimiento del usuario
 * @param {*} fechaMapa Guardamos la fecha en un mapa cada vez que se encuentre una /
 * @param {*} fechaNacimiento Guardamos la fecha con el formato y con los valores del mapa
 * @author Juan Luis Hernandez Terron
 */
let fechaNacimientoprompt = prompt("Dime tu fecha de nacimiento (yyyy/mm/dd)");
let fechaMapa = fechaNacimientoprompt.split("/");
const fechaNacimiento = new Date(fechaMapa[0]+"/"+fechaMapa[1]+"/"+fechaMapa[2]);
fechaNacimiento.setDate(fechaMapa[2]);

/**
 * @function signoEgipcio Pedimos por parameto una fecha, posteriormente tenemos un switch donde depende del mes entrara en cada case, cuando entre en el case, tendremos un if que validará si estña en el rango de fecha , y si está en el rango de fecha,
 *                        llamaremos a la funcion mostrarIframe(), y si no nos mostrará por pantalla un alert de que hemos introducido mal los datos
 */
signoEgipcio(fechaNacimiento);
function signoEgipcio(fecha) {
    const dia = Number(fecha.getDate());
    const mes = Number(fecha.getMonth()+1);
    
    switch (mes) {
        case 1:
                (dia <= 15) ? mostrarIframe("anubis") : (dia >= 16) ? mostrarIframe("bastet") : alert("Has introducido mal el dato"); 
            break;
        case 2:
                (dia <= 15) ? mostrarIframe("bastet") : (dia >= 16) ? mostrarIframe("selket") : alert("Has introducido mal el dato"); 
            break;
        case 3:
                (dia <= 15) ? mostrarIframe("selket") : (dia >= 16) ? mostrarIframe("apep") : alert("Has introducido mal el dato"); 
            break;
        case 4:
                (dia <= 15) ? mostrarIframe("apep") : (dia >= 16) ? mostrarIframe("ptah") : alert("Has introducido mal el dato"); 
            break;
        case 5:
                (dia <= 15) ? mostrarIframe("ptah") : (dia >= 16) ? mostrarIframe("atum") : alert("Has introducido mal el dato");  
            break;
        case 6:
                (dia <= 15) ? mostrarIframe("atum") : (dia >= 16) ? mostrarIframe("isi") : alert("Has introducido mal el dato"); 
            break;
        case 7:
                (dia <= 15) ? mostrarIframe("isi") : (dia >= 16) ? mostrarIframe("ra") : alert("Has introducido mal el dato"); 
            break;
        case 8:
                (dia <= 15) ? mostrarIframe("ra") : (dia >= 16) ? mostrarIframe("horus") : alert("Has introducido mal el dato"); 
            break;
        case 9:
                (dia <= 15) ? mostrarIframe("horus") : (dia >= 16) ? mostrarIframe("maat") : alert("Has introducido mal el dato"); 
            break;
        case 10:
                (dia <= 15) ? mostrarIframe("maat") : (dia >= 16) ? mostrarIframe("osiris") : alert("Has introducido mal el dato"); 
            break;
        case 11:
                (dia <= 15) ? mostrarIframe("osiris") : (dia >= 16) ? mostrarIframe("hato") : alert("Has introducido mal el dato"); 
            break;
        case 12 :
                (dia <= 15) ? mostrarIframe("hato") : (dia >= 16) ? mostrarIframe("anubis") : alert("Has introducido mal el dato"); 
            break;
    }
}

/**
 * 
 * @param {*} signo Es el valor que reciviremos de la validacion de fecha de la funcion signoEgipcio()
 * @function mostrarIframe Crearemos una variable link donde dentro del switch, cuando entre en el case que sea igual a la cadena que tenemos como key, cambiará el valor de link, de vacía, a contener el link del horoscopo egipcio que le pertenece,
 * @param {*} iframe Crearemos un elemento iframe donde le introduciremos como atributo un source (src) y el link del horoscopo egipcio, luego lo mostraremos en el html con el appendChild 
 */

function mostrarIframe(signo) {
    var link = "";
    
    switch (signo.toLowerCase()) {
        case "bastet":
            link = "https://es.wikipedia.org/wiki/Bastet";
            break;
        case "selket":
            link = "https://es.wikipedia.org/wiki/Serket#:~:text=Serket%2C%20es%20la%20diosa%20de,originalmente%20la%20deificaci%C3%B3n%20del%20escorpi%C3%B3n.";
            break;
        case "apep":
            link = "https://es.wikipedia.org/wiki/Apofis_(mitolog%C3%ADa)";
            break;
        case "ptah":
            link = "https://es.wikipedia.org/wiki/Ptah";
            break;
        case "atum":
            link = "https://es.wikipedia.org/wiki/Atum";
            break;
        case "isi":
            link = "https://es.wikipedia.org/wiki/Isis";
            break;
        case "ra":
            link = "https://es.wikipedia.org/wiki/Ra_(mitolog%C3%ADa)";
            break;
        case "horus":
            link = "https://es.wikipedia.org/wiki/Horus";
            break;
        case "maat":
            link = "https://es.wikipedia.org/wiki/Maat";
            break;
        case "osiris":
            link = "https://es.wikipedia.org/wiki/Osiris#:~:text=Osiris%20es%20un%20dios%20y,por%20Seth%2C%20su%20hermano%20menor.";
            break;
        case "hato":
            link = "https://es.wikipedia.org/wiki/Hathor";
            break;
        case "anubis":
            link = "https://es.wikipedia.org/wiki/Anubis#:~:text=Anubis%20es%20el%20nombre%20egipcio,hombre%20con%20cabeza%20de%20chacal.";
            break;
        default:
            break;
    }
    var iframe = document.createElement("iframe");
    iframe.width="80%";
    iframe.height="650px";
    iframe.setAttribute("src",link)
    document.getElementById("mostrarIframe").appendChild(iframe);
}