var introduccion;
var textArea;

window.addEventListener("load",()=>{
const boton = document.getElementById("enviar");
boton.addEventListener("click",descargaArchivo);
document.getElementById("introduccion").value = window.location;
introduccion = document.getElementById("introduccion").value;
textArea= document.getElementById("textarea");
})

function descargaArchivo() {
    if(window.XMLHttpRequest){
        peticion = new XMLHttpRequest();
        peticion.onreadystatechange = meterDatoTextArea;
        peticion.open(
            "GET",
            introduccion
        );
        peticion.send();
    }
}

function meterDatoTextArea() {
    console.log(peticion.readyState)
    if (peticion.readyState === 4) {
        if (peticion.status === 200) {
            textArea.textContent = peticion.responseText;
        }
    }
}