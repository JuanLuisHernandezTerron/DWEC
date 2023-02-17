const boton = document.getElementById("envio")
const informacion = document.getElementById("informacion")

window.addEventListener("load",()=>{
    boton.addEventListener("click",enviarJSONserver);
})

function enviarJSONserver() {
    if (window.XMLHttpRequest) {
        const titulo = document.getElementById("titulo").value;
        const cadena = document.getElementById("cadena").value;
        const director = document.getElementById("director").value;
        const ano = document.getElementById("ano").value;
        const terminada = document.getElementById("terminada").checked;

        peticion = new XMLHttpRequest();
        peticion.onreadystatechange = crearYmostrar;
        peticion.open('POST',"create_serie.php");
        peticion.setRequestHeader('Content-type', 'application/json');
        var serie = {
            "titulo":titulo,
            "cadena":cadena,
            "director":director,
            "anyo":ano,
            "terminada":terminada
        }

        const objetoJSON = JSON.stringify(serie);
        peticion.send(objetoJSON);
    }
}

function crearYmostrar() {
    const resultado = peticion.responseText;
    if (peticion.readyState === 4) {
        if(peticion.status === 200 && resultado === '"ok"') {
            console.log(resultado)
            console.log("Se ha ingresado el dato en la tabla")
            informacion.className ="ingresado"
            informacion.innerHTML = resultado;
        }else{
            console.log("No se ha podido insertar en la tabla")
            informacion.className ="error"
            informacion.innerHTML = resultado;
        }
    }
}