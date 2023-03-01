window.addEventListener('load',()=>{
    const botonGenerar = document.getElementById('GenerarAleatorio')
    const guardarUsuarioXML = document.getElementById('GuardarUsuarioXML')
    const guardarUsuarioFETCH = document.getElementById('GuardarUsuarioFETCH')

    botonGenerar.addEventListener('click',generarUsuario)
    guardarUsuarioFETCH.addEventListener('click',guardarUsuarioFetch)
    guardarUsuarioXML.addEventListener('click',guardarUsuarioXMLBBDD)
})

arrayUsers = [];

function generarUsuario() {
    console.log('Entrando en la funcion generar usuario')
    fetch('https://randomuser.me/api/?nat=es')
        .then((response)=>{
            if (response.ok) {
                return response.json();
            }
        })
        .then((data)=>{
            rellenarCard(data.results[0])
        })
        .catch((error)=>{
            console.log(error)
        });
}

function rellenarCard(persona) {
    const tarjeta = document.getElementById('tarjeta');
    tarjeta.textContent = " ";
    console.log(persona)
    let imagen = document.createElement('img');
    let Pnombre= document.createElement('p')
    let PDireccion= document.createElement('p')
    let PTelefono= document.createElement('p')
    let PEmail= document.createElement('p')
    let botonAnadirTabla= document.createElement('button')

    let PersonaAUX = {
        name : persona.name.title +" "+persona.name.first + " "+ persona.name.last,
        phone: persona.cell,
        street: persona.location.street.name +" "+persona.location.street.number,
        email: persona.email,
        image: persona.picture.thumbnail
    }

    imagen.setAttribute('src',persona.picture.thumbnail);
    Pnombre.textContent = persona.name.title +" "+persona.name.first + " "+ persona.name.last;
    PDireccion.textContent = persona.location.street.name +" "+persona.location.street.number;
    PTelefono.textContent = persona.cell;
    PEmail.textContent = persona.email;
    botonAnadirTabla.textContent = 'Guardar'

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(Pnombre)
    tarjeta.appendChild(PDireccion)
    tarjeta.appendChild(PTelefono)
    tarjeta.appendChild(PEmail)
    tarjeta.appendChild(botonAnadirTabla)

    botonAnadirTabla.addEventListener('click',()=>{
        if (arrayUsers.indexOf(PersonaAUX) === -1) { // Si no está lo metera y lo pintará en la tabla
            arrayUsers.push(PersonaAUX)
            rellenarTabla(PersonaAUX)
        }
    })
}

function rellenarTabla(persona) {
    console.log(persona)
    let rotulo = ['name','phone','street','email','image']
    const tabla = document.getElementById('tabla');
    tabla.textContent = " ";

    for (const key in rotulo) {
        let th = document.createElement('th');
        th.textContent = rotulo[key];
        tabla.appendChild(th)
    }

    for (let i = 0; i < arrayUsers.length; i++) {
        let tr = document.createElement('tr');
        tabla.appendChild(tr);
        for (const key in arrayUsers[i]) {
            let td = document.createElement('td')
            td.textContent = arrayUsers[i][key];
            tabla.appendChild(td)
        }
    }
}

function guardarUsuarioFetch() {
    fetch('save_users.php',{
        method : 'POST',
        header:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arrayUsers)
    })
        .then((response =>{
            if (response.ok) {
                return response.json();
            }
        }))
        .catch((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
}

function guardarUsuarioXMLBBDD() {
    if (window.XMLHttpRequest) {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                cambioEstados(xhr)
            }
            xhr.open('POST','save_users.php')
            xhr.setRequestHeader('Content-type', 'application/json');
            const arrayJSON = JSON.stringify(arrayUsers)
            xhr.send(arrayJSON);
    }else{
        console.log('Su navegador no soporta XMLHTTPREQUEST')
    }
}

function cambioEstados(xhr) {
    if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
    }else if(xhr.status !== 200){
        console.log("Error del servidor");
    }
}