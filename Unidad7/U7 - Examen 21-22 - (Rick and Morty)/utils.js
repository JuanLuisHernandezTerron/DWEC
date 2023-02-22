window.addEventListener('load',()=>{
    const obtenerXML = document.getElementById('xmlButton');
    const obtenerFetch = document.getElementById('fetchButton');
    const obtenerInfoGuardar = document.getElementById('obtenerInfo');
    obtenerXML.addEventListener('click',()=>{
        const numeroMin = document.getElementById('min').value;
        const numeroMax = document.getElementById('max').value;
        selectXML(Number.parseInt(numeroMin),Number.parseInt(numeroMax));
    })

    obtenerFetch.addEventListener('click',()=>{
        const numeroMin = document.getElementById('min').value;
        const numeroMax = document.getElementById('max').value;
        selectFetch(Number.parseInt(numeroMin),Number.parseInt(numeroMax));
    })

    obtenerInfoGuardar.addEventListener('click',()=>{
        // const idPersonaje = document.getElementById('selectPersonaje');
        const idPersonajeAUX = document.getElementById('selectPersonaje').value;
        const arraySelect = document.querySelectorAll('option')
        for (let i = 0; i < arraySelect.length; i++) {
            if (arraySelect[i].label === idPersonajeAUX ) {
                guardarInfo(arraySelect[i].id)
            }
        }
    })
})

function guardarInfo(idPersonaje) {
    console.log('Entrando en guardarInfo')
     fetch('https://rickandmortyapi.com/api/character/'+idPersonaje)
         .then((response)=>{
             if (response.ok) {
                 return response.json();
             }
         })
         .then((data)=>{
             ingresarDatoBBDD(data)
         }) 
}

function ingresarDatoBBDD(informacionPersonaje) {

    var personajeIngresar = {
        'id': informacionPersonaje.id,
        'name':informacionPersonaje.name,
        'air_date':informacionPersonaje.created,
        'episode':informacionPersonaje.episode[0]
    }
    console.log(personajeIngresar)
    fetch('guardar_episodio_rm.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personajeIngresar)
    })
        .then((response)=>{
            if (response.ok) {
                console.log('Ingresado Correctamente')
                const breadcrumbs = document.getElementById('breadcrumb')
                const p = document.createElement('p')
                p.textContent = 'Se ha ingresado el capitulo de '+ informacionPersonaje.name;
                breadcrumbs.appendChild(p)
                return response.json();
            }
        })
        .catch((err)=>{
            console.log(err);
        })
 }
function selectXML(numeroMin,numeroMax) {
    console.log("Entrando en la funcion selectXML")
    if (numeroMin > 0 && numeroMax > 0 ) {
        for (let i = numeroMin; i <= numeroMax; i++) {
        if (window.XMLHttpRequest) {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                guardarInfoXML(xhr)
            };
            xhr.open('GET','https://rickandmortyapi.com/api/character/'+i);
            xhr.send();
            }
        }
    }
}

function guardarInfoXML(xhr) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let arrayPersonajes =[]
            resultado = JSON.parse(xhr.responseText);
            console.log('Ingresado Correctamente')
            const breadcrumbs = document.getElementById('breadcrumb')
            const select = document.getElementById('selectPersonaje');
            const option = document.createElement('option');
                const p = document.createElement('p')
                p.textContent = 'Se ha cargado el capitulo de '+ resultado.name;
                breadcrumbs.appendChild(p)
            option.textContent = resultado.name;
                option.setAttribute('id',resultado.id)
                select.appendChild(option);
            arrayPersonajes.push(resultado)
            mostrarInfo(arrayPersonajes)
        }
    }
}

function selectFetch(numeroMin,numeroMax) {
    console.log("Entrando en la funcion selectXML")
    console.log(numeroMin)
    if (numeroMin > 0 && numeroMax > 0 ) {
        for (let i = numeroMin; i <= numeroMax; i++) {
            fetch('https://rickandmortyapi.com/api/character/'+i)
            .then((response)=>{
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data)=>{
                let arrayPersonajes =[]
                const p = document.createElement('p');
                const select = document.getElementById('selectPersonaje');
                const option = document.createElement('option');
                p.textContent = "Se ha obtenido el personaje " +data.name;
                option.textContent = data.name;
                option.setAttribute('id',data.id)
                breadcrumb.appendChild(p);
                select.appendChild(option);
                arrayPersonajes.push(data);
                mostrarInfo(arrayPersonajes)
            })
        }
    }
}

function mostrarInfo(dato) {
    const divInfo = document.getElementById("informacion");
    for (let i = 0; i < dato.length; i++) {
        console.log(dato)
        const img = document.createElement('img');
        const hr = document.createElement('hr');
        const createDate = document.createElement('p');
        const pSpecie = document.createElement('p');
        const originName = document.createElement('p');
        const h2Name = document.createElement('h2');
        const nameOrigin = document.createElement('p');
        img.setAttribute("src",dato[i].image)
        h2Name.textContent = dato[i].name
        pSpecie.textContent = dato[i].species
        originName.textContent = dato[i].origin
        createDate.textContent = dato[i].created
        nameOrigin.textContent = dato[i].origin.name;

        divInfo.appendChild(img)
        divInfo.appendChild(h2Name)
        divInfo.appendChild(pSpecie)
        divInfo.appendChild(nameOrigin)
        divInfo.appendChild(createDate)
        divInfo.appendChild(hr)
    }
}