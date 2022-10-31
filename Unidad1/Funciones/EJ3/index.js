// Calcular cuál es tu signo Egipcio que corresponde la página Signo del horóscopo Egipcio

// Debes preguntar por la fecha y utilizar el objeto Date en algún momento. Se deberá, así pues, preguntar por la fecha de nacimiento (año incluido).
// Deberéis utilizar una página con la descripción del dios que corresponda a vuestro signo. Mostrar en iframe.
// No se pueden utilizar arrays, debiendo encontrar otra solución que utilice switch

let fechaNacimientoprompt = prompt("Dime tu fecha de nacimiento (yyyy/mm/dd)");
let fechaMapa = fechaNacimientoprompt.split("/");
const fechaNacimiento = new Date(fechaMapa[0]+"/"+fechaMapa[1]+"/"+fechaMapa[2]);
fechaNacimiento.setDate(fechaMapa[2]);

signoEgipcio(fechaNacimiento);
function signoEgipcio(fecha) {
    const dia = Number(fecha.getDate());
    const mes = Number(fecha.getMonth()+1);
    
    switch (mes) {
        case 1,2:
                ((dia >= 16 && mes ==1 ) ||(dia <= 15 && mes == 2)) ? mostrarIframe("bastet") : alert("Introduce bien el dato"); 
            break;
        case 2,3:
                ((dia >= 16 && mes ==2 ) ||(dia <= 15 && mes == 3)) ? mostrarIframe("selket") : alert("Introduce bien el dato"); 
            break;
        case 3,4:
                ((dia >= 16 && mes ==3 ) ||(dia <= 15 && mes == 4)) ? mostrarIframe("apep") : alert("Introduce bien el dato"); 
            break;
        case 4,5:
                ((dia >= 16 && mes ==4 ) ||(dia <= 15 && mes == 5)) ? mostrarIframe("ptah") : alert("Introduce bien el dato"); 
            break;
        case 5,6:
                ((dia >= 16 && mes ==5 ) ||(dia <= 15 && mes == 6)) ? mostrarIframe("atum") : alert("Introduce bien el dato"); 
            break;
        case 6,7:
                ((dia >= 16 && mes ==6 ) ||(dia <= 15 && mes == 7)) ? mostrarIframe("isi") : alert("Introduce bien el dato"); 
            break;
        case 7,8:
                ((dia >= 16 && mes ==7 ) ||(dia <= 15 && mes == 8)) ? mostrarIframe("ra") : alert("Introduce bien el dato"); 
            break;
        case 8,9:
                ((dia >= 16 && mes ==8 ) ||(dia <= 15 && mes == 9)) ? mostrarIframe("horus") : alert("Introduce bien el dato"); 
            break;
        case 9,10:
                ((dia >= 16 && mes ==9 ) ||(dia <= 15 && mes == 10)) ? mostrarIframe("maat") : alert("Introduce bien el dato"); 
            break;
        case 10,11:
                ((dia >= 16 && mes ==10 ) ||(dia <= 15 && mes == 11)) ? mostrarIframe("osiris") : alert("Introduce bien el dato"); 
            break;
        case 11,12:
                ((dia >= 16 && mes ==11 ) ||(dia <= 15 && mes == 12)) ? mostrarIframe("hato") : alert("Introduce bien el dato"); 
            break;
        case 12,1:
                ((dia >= 16 && mes ==12 ) ||(dia <= 15 && mes == 1)) ? mostrarIframe("anubis") : alert("Introduce bien el dato"); 
            break;
    }
}

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
    iframe.width="75%";
    iframe.height="450px";
    iframe.setAttribute("src",link)
    document.getElementById("mostrarIframe").appendChild(iframe);
}