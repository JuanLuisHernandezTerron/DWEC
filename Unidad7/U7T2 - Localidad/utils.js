const boton = document.getElementById("boton");

window.addEventListener("load",()=>{
    boton.addEventListener("click",descargarArchivo)
})

function descargarArchivo() {
    const valorInput = document.getElementById("ciudad").value;
    console.log(valorInput)
    //Vemo si nuestro navegado soporta XHR
    if(window.XMLHttpRequest){
        console.log("entro en xml")
        //Creamos la peticion
        peticion = new XMLHttpRequest();
        //Cuando cambie el estado siempre va a llamar a esta función
        peticion.onreadystatechange = mostrarSiNO;
        //llamamos con get al archivo que esta en la ruta y con el valor del input nos devolvera si está en su array o no
        peticion.open("GET",
        `http://localhost:8090/Unidad7/U7T2 - Localidad/localidad.php?localidad=${valorInput}`);
        //Enviamos la petición
        peticion.send();
    }
}

function mostrarSiNO() {
    console.log(peticion.readyState);
    //Si se ha recibido al servidor, es decir que ha echo los 4 estados seguiremos con el proceso
    if(peticion.readyState === 4){
        //Si el servidor da el ok con el estado 200, mostraemos por pantalla el resultado
        if (peticion.status === 200) {
            const resultado = document.getElementById("resultado");
            resultado.textContent=peticion.responseText
        }
    }
}