window.addEventListener('load',function() {
    const cargarLadrones = document.getElementById('cargarLadrones');
    const cargarLadronesXML = document.getElementById('CriminalesXML');
    const cargarLadronesFetch = document.getElementById('CriminalesFetch');
    const limpiarTabla = document.getElementById('LimpiarTabla');

    cargarLadronesXML.addEventListener('click',cargarLadronesXML2)
    cargarLadronesFetch.addEventListener('click',cargarTablaFetch)
    cargarLadrones.addEventListener('click', cargarTabla);
    limpiarTabla.addEventListener('click', limpiarTabla2);
})

function cargarLadronesXML2(){
    console.log('Entrando en la funcion cargarLadronesXML2')
    if (window.XMLHttpRequest) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            cargarDatos2(xhr)
        };
        xhr.open('GET','get_criminals.php');
        xhr.send();
    }
}

function cargarDatos2(xhr) {
    console.log('Entra funcion cargarDatos2')
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            resultado = JSON.parse(xhr.responseText);
            console.log(resultado)
            realizarTabla2(resultado)
        }
    }
}

function cargarTablaFetch() {
    fetch('get_criminals.php')
    .then((response) =>{
        if (response.ok) {
            return response.json()
        }
    })
    .then((data)=>{
        realizarTabla2(data)
    })
    .catch((error)=>{
        console.log(error);
    })
}

function limpiarTabla2() {
    const tabla = document.getElementById('tabla');
    const breadcrumb= document.getElementById('breadcrumb');
    tabla.innerHTML = " ";
    breadcrumb.innerHTML = "";
    const p = document.createElement('p');
    p.textContent ="Se ha limpiado la tabla"
    breadcrumb.appendChild(p)
}

function cargarTabla() {
    console.log('Entra funcion cargarTabla')
    if (window.XMLHttpRequest) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            cargarDatos(xhr)
        }
        xhr.open('GET','https://api.fbi.gov/@wanted');
        xhr.send();
    }
}

function cargarDatos(xhr) {
    console.log('Entra funcion cargarDatos')
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            resultado = JSON.parse(xhr.responseText);
            console.log(resultado)
            realizarTabla(resultado.items)
        }
    }
}

var arrayGlobal= [];

function realizarTabla(arrayLadronesAUX) {
    const tabla = document.getElementById('tabla');
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = " ";
    tabla.innerHTML = " ";
    arrayGlobal = arrayLadronesAUX;
    console.log('Entra funcion realizarTabla')
    let arrayTitulos = ['uid','title','description','aliases','images ','guardar']
    const tr = document.createElement('tr');
    tabla.className ="tabla"
    const theader = document.createElement('theader');
    tabla.appendChild(theader)
    tabla.appendChild(tr)
    for (const key in arrayTitulos) {
        let th = document.createElement('th');
        th.textContent = arrayTitulos[key];
        tr.appendChild(th)
    }

    const tbody = document.createElement('tbody');
    tabla.appendChild(tbody)
    for (let i = 0; i < arrayLadronesAUX.length; i++) {
        contador = 0;
        const tr = document.createElement('tr');
        tabla.appendChild(tr);
        for (const key in arrayLadronesAUX[i]) {
            const uid = document.createElement('td');
            const title = document.createElement('td');
            const description = document.createElement('td');
            const aliases = document.createElement('td');
            const images = document.createElement('td');
            const guardar = document.createElement('input');
            guardar.setAttribute('value','Encarcelar')
            guardar.setAttribute('type','button')
            if (key === "uid" || key === "title" || key === "description" || key === "aliases" || images === "aliases") {
                if (contador < 1) {
                    contador++;
                    uid.textContent= arrayLadronesAUX[i].uid;
                    title.textContent= arrayLadronesAUX[i].title;
                    description.textContent = arrayLadronesAUX[i].description;
                    aliases.textContent = arrayLadronesAUX[i].aliases;
                    guardar.setAttribute('id',arrayLadronesAUX[i].uid)

                    let arrayimages = arrayLadronesAUX[i].images;
                    const imagensrc = document.createElement('img');
                    imagensrc.src = arrayimages[0].thumb;
                    console.log(arrayLadronesAUX[key])
                    images.appendChild(imagensrc);

                    tr.appendChild(uid);
                    tr.appendChild(title);
                    tr.appendChild(description);
                    tr.appendChild(aliases);
                    tr.appendChild(images);
                    tr.appendChild(guardar);
                const p = document.createElement('p');
                p.textContent = "Se ha introducido en la tabla el encarcelado "+ arrayLadronesAUX[i].title;
                breadcrumb.appendChild(p);
            }
            tbody.appendChild(tr);
            guardar.addEventListener('click',guardarBBDD)
        }
        }
    }
}

function realizarTabla2(arrayLadronesAUX) {
    const tabla = document.getElementById('tabla');
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = " ";
    tabla.innerHTML = " ";

    arrayGlobal = arrayLadronesAUX;
    console.log('Entra funcion realizarTabla')
    let arrayTitulos = ['uid','title','description','aliases','images ','guardar']
    const tr = document.createElement('tr');

    tabla.className ="tabla"
    const theader = document.createElement('theader');
    tabla.appendChild(theader)
    tabla.appendChild(tr)
    for (const key in arrayTitulos) {
        let th = document.createElement('th');
        th.textContent = arrayTitulos[key];
        tr.appendChild(th)
    }

    const tbody = document.createElement('tbody');
    tabla.appendChild(tbody)
    for (let i = 0; i < arrayLadronesAUX.length; i++) {
        contador = 0;
        const tr = document.createElement('tr');
        tabla.appendChild(tr);
        for (const key in arrayLadronesAUX[i]) {
            const uid = document.createElement('td');
            const title = document.createElement('td');
            const description = document.createElement('td');
            const aliases = document.createElement('td');
            const images = document.createElement('td');
            const guardar = document.createElement('input');
            guardar.setAttribute('value','Encarcelar')
            guardar.setAttribute('type','button')
            if (key === "uid" || key === "title" || key === "description" || key === "aliases" || images === "aliases") {
                if (contador < 1) {
                    contador++;
                    uid.textContent= arrayLadronesAUX[i].uid;
                    title.textContent= arrayLadronesAUX[i].title;
                    description.textContent = arrayLadronesAUX[i].description;
                    aliases.textContent = arrayLadronesAUX[i].aliases;
                    guardar.setAttribute('id',arrayLadronesAUX[i].uid)

                    const imagensrc = document.createElement('img');
                    imagensrc.src = arrayLadronesAUX[i].images;
                    console.log(arrayLadronesAUX[key])
                    images.appendChild(imagensrc);

                    tr.appendChild(uid);
                    tr.appendChild(title);
                    tr.appendChild(description);
                    tr.appendChild(aliases);
                    tr.appendChild(images);
                    tr.appendChild(guardar);
                const p = document.createElement('p');
                p.textContent = "Se ha introducido en la tabla el encarcelado "+ arrayLadronesAUX[i].title;
                breadcrumb.appendChild(p);
            }
            tbody.appendChild(tr);
            guardar.addEventListener('click',guardarBBDD)
        }
        }
    }
}

function guardarBBDD(e) {
    const objeto = e.currentTarget;
    for (let i = 0; i < arrayGlobal.length; i++) {
        if (arrayGlobal[i].uid === objeto.id) {
            console.log('iguales')
            var arrayimages = arrayGlobal[i].images;
            console.log(arrayimages)

            const uid = arrayGlobal[i].uid;
            const title = arrayGlobal[i].title;
            const description = arrayGlobal[i].description;
            const aliases = arrayGlobal[i].aliases;
            const images = arrayimages[0].thumb;
            var objetoPreso ={
                'uid':uid,
                'title':title,
                'description':description,
                'aliases':aliases,
                'images':images
            }
            fetch('save_criminal.php',{
                method: 'POST',
                header:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objetoPreso)
            })
                .then((response)=>{
                    if (response.ok) {
                        console.log('Introducido Correctamente')
                        const breadcrumb = document.getElementById('breadcrumb')
                        const p = document.createElement('p');
                        p.textContent = "Se ha introducido en la base de datos el encarcelado "+ arrayLadronesAUX[i].title;
                        breadcrumb.appendChild(p);
                        return response.json();
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    }
}