const valorInput = document.getElementById("ciudad").value;
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

window.addEventListener("load",()=>{
    boton.addEventListener("click",descargarArchivo)
})

function descargarArchivo() {
    if(window.XMLHttpRequest){
        peticion = new XMLHttpRequest();
        peticion.onreadystatechange = mostrarSiNO;
        peticion.open("GET",
        "http://localhost:8090/Unidad7/U7T2 - Localidad/localidad.php?localidad="+valorInput);
        peticion.send();
    }
}

function mostrarSiNO() {
    console.log(peticion.readyState);
    if(peticion.readyState === 4){
        if (peticion.status === 200) {
            resultado.textContent=peticion.responseText
            alert(peticion.responseText)
        }
    }
}