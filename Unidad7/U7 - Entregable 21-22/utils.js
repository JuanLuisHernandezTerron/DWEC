window.addEventListener('load',()=>{
    const cargarVehiculos = document.getElementById("cargarVehiculos");
    cargarVehiculos.addEventListener('click',recogerVehiculos)
})

function recogerVehiculos() {
    console.log("Entro en la funcion recogerVehiculos");
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = mostrarVehiculos;
        xhr.open('GET', 'http://localhost:8090/Unidad7/U7 - Entregable 21-22/vehiculos.json');
        xhr.send()
    }
}

function mostrarVehiculos() {
    console.log('Entro en la funcion mostrarVehiculos');
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const resultado = JSON.parse(xhr.responseText);
            crearTabla(resultado); 
        }
    }
}

function crearTabla(resultado) {
    crearCabecera(resultado);
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i])
    }
}

function crearCabecera(arrayVehiculos) {
    const tabla = document.getElementById('tabla');
    const theader = document.createElement('theader');
    const tr = document.createElement('tr');
    const thEnviar = document.createElement('th');
    thEnviar.textContent= "Enviar"
    tabla.appendChild(theader);
    theader.appendChild(tr);
    contador = 0;
    for (const key in arrayVehiculos[0]) {
        if (key === "id" || key === "name" || key === "description" || key === "vehicle_class") {
            const th = document.createElement('th');
            tr.appendChild(th);
            th.textContent = key;
        }
    }
    tr.appendChild(thEnviar);

}

