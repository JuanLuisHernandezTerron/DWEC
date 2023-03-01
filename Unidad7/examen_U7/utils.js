const API_BASE_URL = "https://gateway.marvel.com/";
const PRIVATE_API_KEY = "3146174c44ddfb0c52a5be8ddc3b3b76cabb0a79";
const PUBLIC_API_KEY = "8ea77e524a3fa42de1fceafbe74ccfb3";
const TS = "1000";
const HASH = md5(TS + PRIVATE_API_KEY + PUBLIC_API_KEY);
url = API_BASE_URL+'v1/public/characters/?apikey='+PUBLIC_API_KEY+'&hash='+HASH+'&ts='+TS+'&limit=10&offset=0';

arrayBotones =[]
arrayPersonajesGlobal = []

window.addEventListener('load',()=>{
    const cargarPersonajes = document.getElementById('cargarPersonaje');
    const guardarBDXML = document.getElementById('guardarBDXML');
    const recuperarBDFetch = document.getElementById('recuperarDatosFetch');
    const limpiarBBDD = document.getElementById('cleanTabla');

    cargarPersonajes.addEventListener('click', recuperarPersonajes);
    guardarBDXML.addEventListener('click', ingresarBBDD);
    recuperarBDFetch.addEventListener('click', recuperarBD);
    limpiarBBDD.addEventListener('click', cleanTable)
})

function recuperarPersonajes() {
    console.log('Entrando en la funcion recuperarPersonajes')
    fetch('marvel.json')
        .then((response)=>{
            if (response.ok) {
                return response.json();
            }
        })
        .then((data)=>{
            console.log(data.data.results)
            let arrayPasarPersonajes = [];
            const arrayPersonajes = data.data.results;
            for (let i = 0; i < arrayPersonajes.length; i++) {
                let arrayCapitulos = []
                for (let j = 0; j < arrayPersonajes[i].comics.items.length; j++) {
                    arrayCapitulos.push(arrayPersonajes[i].comics.items[j].name)
                }
                var objeto = {
                    'nombrePersonaje': arrayPersonajes[i].name,
                    'image': arrayPersonajes[i].thumbnail.path,
                    'modified': arrayPersonajes[i].modified,
                    'comics':arrayCapitulos,
                    'id': arrayPersonajes[i].id
                }
                var objetoIngresarBBDD={
                    'id':arrayPersonajes[i].id,
                    'name':arrayPersonajes[i].name,
                    'modified':arrayPersonajes[i].modified,
                    'path':arrayPersonajes[i].thumbnail.path
                }

                arrayPasarPersonajes.push(objeto)
                arrayPersonajesGlobal.push(objetoIngresarBBDD)
            }
            crearTabla(arrayPasarPersonajes)
        })
        .catch((error)=>{
            console.log(error)
        })
}

function crearTabla(arrayPersonajes) {
    const breadCrumb = document.getElementById('breadcrumb');
    breadCrumb.innerHTML = "";
    const tabla = document.getElementById('tabla');
    console.log(arrayPersonajes)

    let rotulos=[
        'Nombre Personaje',
        'Imagen Personaje',
        'Modified',
        'Comics',
        'idPersonaje'
    ]
    let tr = document.createElement('tr');
    tabla.appendChild(tr);

    for (const key in rotulos) {
        let th = document.createElement('th');
        th.textContent = rotulos[key];
        tr.appendChild(th);
    }

    for (let i = 0; i < arrayPersonajes.length; i++) {
        let tr = document.createElement('tr')
        tabla.appendChild(tr)
        for (const key in arrayPersonajes[i]) {
            let tdValor = document.createElement('td')
            tdValor.textContent = arrayPersonajes[i][key]
            tr.appendChild(tdValor)
        }
        const buttonGuardar = document.createElement('button')
        buttonGuardar.textContent = 'Guardar';
        buttonGuardar.setAttribute('id',arrayPersonajes[i].id)
        tr.appendChild(buttonGuardar)
        
        buttonGuardar.addEventListener('click',guardarBoton)
    }
    let p = document.createElement('p');
    p.textContent = "Tabla Cargada completamente";
    breadCrumb.appendChild(p)
}

function guardarBoton(e) {
    const objeto = e.currentTarget;
    arrayBotones.push(Number.parseInt(objeto.id))
}

function ingresarBBDD() {
    console.log('Entrando funcion ingresarBBDD')
    let arrayBBDD=[];
    for (let i = 0; i < arrayBotones.length; i++) {
        for (let j = 0; j < arrayPersonajesGlobal.length; j++) {
            if (arrayBotones[i] === arrayPersonajesGlobal[j].id) {
                console.log(arrayPersonajesGlobal[j])
                arrayBBDD.push(arrayPersonajesGlobal[j])
            }            
        }        
    }
    
    if (window.XMLHttpRequest) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            cambiosEstados(xhr)
        };
        xhr.open('POST','save_marvel_characters.php');
        xhr.setRequestHeader('Content-Type', 'application/json');
        const objeto = JSON.stringify(arrayBBDD);
        xhr.send(objeto) 
    }
    const breadCrumb = document.getElementById('breadcrumb');
    breadCrumb.innerHTML = " ";
    let p = document.createElement('p');
    p.textContent = "BBDD Cargada Correctamente";
    breadCrumb.appendChild(p)

}

function cambiosEstados(xhr) {
    if (xhr.ReadyState === 4 && xhr.status === 200) {
        console.log('Introducido en la base de datos')
    }else if (xhr.status !== 200){
        console.log('Error del servidor')
    }
}

function recuperarBD() {
    fetch('get_marvel_characters.php')
        .then((response) =>{
            if (response.ok) {
                return response.json()
            }
        })
        .then((data)=>{
            crearTablaFetch(data)
        })
        .catch((error) =>{
            console.log(error)
        })
}

function crearTablaFetch(arrayDatos) {
    console.log(arrayDatos)
    const tabla = document.getElementById('tabla');
    let rotulos = [
        'id',
        'name',
        'modified',
        'path'
    ]
    let tr = document.createElement('tr');
    tabla.appendChild(tr);
    for (const key in rotulos) {
        let th = document.createElement('th');
        th.textContent = rotulos[key]
        tr.appendChild(th);
    }

    for (let i = 0; i < arrayDatos.length; i++) {
        let tr = document.createElement('tr')
        tabla.appendChild(tr)
        for (const key in arrayDatos[i]) {
            let tdValor = document.createElement('td')
            tdValor.textContent = arrayDatos[i][key]
            tr.appendChild(tdValor)
        }
    }
}

function cleanTable() {
    const table = document.getElementById('tabla')
    table.innerHTML = '';
    const breadCrumb = document.getElementById('breadcrumb');
    breadCrumb.innerHTML = " ";
    let p = document.createElement('p');
    p.textContent = "Tabla Limpiada Correctamente";
    breadCrumb.appendChild(p)
}



