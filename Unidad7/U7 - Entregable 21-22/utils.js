window.addEventListener('load',()=>{
    const cargarVehiculos = document.getElementById("cargarVehiculos");
    const enviarvehiculos = document.getElementById("enviarVehiculos");
    cargarVehiculos.addEventListener('click',recogerVehiculos)
    enviarvehiculos.addEventListener('click',recogerInfoVehiculosRegistro)
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
            resultado = JSON.parse(xhr.responseText);
            crearTabla(resultado);
            //PHP ya filtra las tablas
            fetch('insertar_vehiculos.php',{
                method:'POST',
                header:{
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(resultado)
                })
                    .then((response)=>{
                        if (response.ok) {
                            console.log(response)
                        return response.json();
                    }
                    })
                    .catch((err) => {console.log(err)})
        }
    }
}

function recogerInfoVehiculosRegistro() {
    const checkboxAirship = document.getElementById("0").checked;
    const checkboxAirplane = document.getElementById("1").checked;
    const checkboxBoat = document.getElementById("2").checked;
    const divInfo = document.getElementById('breadcrumb');

    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    var id_vehiculo;
    if (checkboxAirship) {
        id_vehiculo= document.getElementById("0Vehiculo").textContent;
    }else if(checkboxAirplane){
        id_vehiculo= document.getElementById("1Vehiculo").textContent;
    }else if(checkboxBoat){
        id_vehiculo= document.getElementById("2Vehiculo").textContent;
    }

    var vehiculoRegis={
        "nombre":nombre,
        "direccion":direccion,
        "telefono":telefono,
        "correo":email,
        "vehiculos":[id_vehiculo]
    }


    fetch('registrar_envio.php',{
        method: 'POST',
        header:{
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(vehiculoRegis)
    })
        .then((response)=>{
            if (response.ok) {
                console.log('Insertado Correctamente')
                return response.json();
            }
        })
        .catch((err)=>{
            console.log(err);
        })
        divInfo.innerHTML ="Dato insertado en la base de datos de registrado correctamente"
}

function crearTabla(resultado) {
        crearCabecera(resultado);
        const tabla = document.getElementById('tabla');
        const tbody = document.createElement('tbody');
        const divInfo = document.getElementById('breadcrumb');
        tabla.appendChild(tbody)

        for (let i = 0; i < resultado.length; i++) {
            contador = 0;
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            for (const key in resultado[i]) {
                const tdID = document.createElement('td');
                const tdName = document.createElement('td');
                const tdDescription = document.createElement('td');
                const tdVehicle = document.createElement('td');
                const checkbox = document.createElement('input');
                if (key === "id" || key === "name" || key === "description" || key === "vehicle_class") {
                    if (contador < 1) {
                        contador++;
                        tdID.textContent= resultado[i].id;
                        tdID.setAttribute("id",i+"Vehiculo");
                        tdName.textContent = resultado[i].name;
                        tdDescription.textContent = resultado[i].description;
                        tdVehicle.textContent = resultado[i].vehicle_class;
                    
                        tr.appendChild(tdID);
                        tr.appendChild(tdName);
                        tr.appendChild(tdDescription);
                        tr.appendChild(tdVehicle);
                        tr.appendChild(checkbox);

                        checkbox.setAttribute("type","checkbox");
                        checkbox.setAttribute("id",i);
                }
                tbody.appendChild(tr);
            }
        }
    divInfo.innerHTML ="Tabla Cargada de vehiculos e Insertada en la base de datos"
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

