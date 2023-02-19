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
        const idPersonaje = document.getElementById('selectPersonaje');
        console.log(idPersonaje)
        guardarInfo()
    })
})

function guardarInfo() {
    console.log('Entrando en guardarInfo')
    fetch('https://rickandmortyapi.com/api/character/'+i)
        .then((response)=>{
            if (response.ok) {
                return response.json();
            }
        })
        .then((data)=>{
            console.log(data)
        }) 
}

function selectXML(numeroMin,numeroMax) {
    console.log("Entrando en la funcion selectXML")
    if (numeroMin > 0 && numeroMax > 0 ) {
        
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

