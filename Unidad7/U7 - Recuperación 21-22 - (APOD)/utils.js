window.addEventListener('load', function(){
    const botonCargarXML = document.getElementById('cargarXML');
    const botonCargarFetch = document.getElementById('cargarFetch');
    const select =  document.getElementById('select');
    const botonGuardar = document.getElementById('guardarPlaneta');

    botonGuardar.addEventListener('click', guardarPost)

    select.addEventListener('change', function(){
        cargarInfo()
    })
    botonCargarXML.addEventListener('click',function () {
        const numeroBusqueda = document.getElementById('numero').value;
        CargarXML(Number.parseInt(numeroBusqueda))
    }) 
    botonCargarFetch.addEventListener('click',function () {
        const numeroBusqueda = document.getElementById('numero').value;
        CargarFetch(Number.parseInt(numeroBusqueda))
    }) 
})
arrayPlanetas=[]

function guardarPost() {
    const valorSelect = document.getElementById('select').value;
    const querysOption = document.querySelectorAll('option');
    for (let i = 0; i < querysOption.length; i++) {
        if (valorSelect === querysOption[i].label) {
            var objetoPlaneta={
                'title':arrayPlanetas[i].title,
                'url':arrayPlanetas[i].url,
                'explanation':arrayPlanetas[i].explanation,
                'date': arrayPlanetas[i].date
            }
            fetch('save_apod.php',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objetoPlaneta)
            })
                .then((response)=>{
                    if (response.ok) {
                        const breadcrumbs = document.getElementById('bredcrumb')
                        const p = document.createElement('p')
                        p.textContent = 'Se ha ingresado el capitulo de '+ arrayPlanetas[i].title;
                        breadcrumbs.appendChild(p)
                        return response.json();
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
        }        
    }
}

function cargarInfo() {
    const valorSelect = document.getElementById('select').value;
    const querysOption = document.querySelectorAll('option');
    const informacion = document.getElementById('informacion2');
    informacion.innerHTML= "";
    for (let i = 0; i < querysOption.length; i++) {
        
        if (valorSelect === querysOption[i].label) {
                const img = document.createElement('img');
                const title = document.createElement('h4');
                const description = document.createElement('p');
                const fecha = document.createElement('p');
                const hr = document.createElement('hr');

                img.setAttribute('src',arrayPlanetas[i].url);
                title.textContent = arrayPlanetas[i].title;
                description.textContent = arrayPlanetas[i].explanation;
                fecha.textContent = arrayPlanetas[i].date;

                informacion.appendChild(img)
                informacion.appendChild(title)
                informacion.appendChild(description)
                informacion.appendChild(fecha)
                informacion.appendChild(hr)
        }
    }
}

function CargarXML(numeroBusqueda) {
    console.log('Entramos funcion cargarXML ')
    if (numeroBusqueda > 0) {
        if (window.XMLHttpRequest) {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                guardarInfoXML(xhr)
            }
            xhr.open('GET','https://api.nasa.gov/planetary/apod?api_key=7hKwlSicXVAEGgrg86Fbr6Srz1Erfa0FhzEjDXmE&count='+numeroBusqueda)
            xhr.send();
        }
    }
}

function guardarInfoXML(xhr) {
    console.log('Entramos en la funcion guardarInfoXML')
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const bredcrumb = document.getElementById('bredcrumb');
            const select = document.getElementById('select');
            resultado = JSON.parse(xhr.responseText)
            for (const key in resultado) {
                arrayPlanetas = resultado;
                     const p = document.createElement('p');
                     const option = document.createElement('option');
                     option.textContent = resultado[key].title;
                     option.setAttribute('name',resultado[key].title)
                     p.textContent = 'Se ha obtenido el planeta '+resultado[key].title;
                     select.appendChild(option);
                     bredcrumb.appendChild(p);
            }
            console.log(resultado)
        }
    }
}