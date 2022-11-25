const queryGlobal = document.querySelectorAll("td");
const contadorAcierto = document.getElementById("contadorAciertos");
var imagenesArra = [];
var arrayEvents = [];
var img1;
var event1;
var imgAUX1;
var imgAUX2;
var contador = 0;
tdHabilitar()
/**
 *
 * @param  
 */
function tdHabilitar() {
   for (let i = 0; i < queryGlobal.length; i++) {   
        queryGlobal[i].addEventListener("click",habilitar,false);
    }
}

function habilitar(e) {
    const td = e.currentTarget;  // GUARDA EL TD QUE HEMOS HECHO CLICK EN EL
    const img = td.firstChild; //Guarda la imagen
    arrayEvents.push(td);  //Meto el td en un array
    imagenesArra.push(img); //Meto en un array la imagen
    img1 = imagenesArra[imagenesArra.length-1];
    img1.className="habilitar";

    if (imagenesArra.length == 2) {
            if (imagenesArra[0].src == imagenesArra[1].src) {
                if(imagenesArra[0].id != imagenesArra[1].id){
                for (let j = 0; j < arrayEvents.length; j++) {
                    event1 = arrayEvents[j];
                    event1.className="correcto";
                }
                arrayEvents[0].removeEventListener("click",habilitar,false);
                arrayEvents[1].removeEventListener("click",habilitar,false);
                arrayEvents=[];
                imagenesArra=[];
                contadorAcierto.value = ++contador;

            }else{
                imgAUX1 = imagenesArra[0];
                imgAUX2 = imagenesArra[1];
                imgAUX1.className="repetido";
                imgAUX2.className="repetido";
                arrayEvents=[];
                imagenesArra=[];
            }
            }else if(imagenesArra.length === 2 && imagenesArra[0].src != imagenesArra[1].src){
                imgAUX1 = imagenesArra[0];
                imgAUX2 = imagenesArra[1];
                setTimeout(() => {
                    imgAUX1.className="desaparece";
                    imgAUX2.className="desaparece";
                    }, 1000);
                arrayEvents=[];
                imagenesArra=[];
            }
    }
}

