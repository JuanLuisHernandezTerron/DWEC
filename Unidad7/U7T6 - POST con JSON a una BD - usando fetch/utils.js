const boton = document.getElementById('envio');
var contador = 0;
var arrayTittle;

const botonTabla = document.getElementById('mostrarTabla');
window.addEventListener('click',() =>{
    boton.addEventListener('click',introducirBBDD)
    botonTabla.addEventListener('click',mostrarTablaBBDD)
});

function introducirBBDD() {
    const titulo = document.getElementById("titulo").value;
    const cadena = document.getElementById("cadena").value;
    const director = document.getElementById("director").value;
    const ano = document.getElementById("ano").value;
    const terminada = document.getElementById("terminada").checked;

    var serie = {
        "titulo":titulo,
        "cadena":cadena,
        "director":director,
        "anyo":ano,
        "terminada":terminada
    }
    fetch('create_serie.php',{
        method:'POST',
        header:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(serie)
    })
        .then((response)=>{
            if (response.ok) {
                console.log('Serie introducido')
            }
        })
        .catch((err) => {console.log(err)})
}

function mostrarTablaBBDD() {
    fetch('listar_series.php')
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
    })
    .then((data)=>{
        console.log(data)
        const tabla = document.getElementById('tabla');
        tabla.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            creacionTheaders(arrayTittle=Object.keys(data[i]))
            creacionTabla(data[i].anyo,data[i].cadena,data[i].director,data[i].titulo,data[i].terminada)
        }
    })
    .catch((err) => {console.log(err)})
}

function creacionTheaders(array) {
    if(contador <= 0){
        contador ++;
        const theader = document.createElement("thead");
        const thAno = document.createElement("th");
        const thTitle = document.createElement("th");
        const thDirector = document.createElement("th");
        const thCadena = document.createElement("th");
        const thTerminada = document.createElement("th");
        thAno.className = "bordes"
        thCadena.className = "bordes"
        thDirector.className = "bordes"
        thTerminada.className = "bordes"
        thTitle.className = "bordes"

        thTitle.textContent = array[1]
        thCadena.textContent = array[2]
        thDirector.textContent = array[3]
        thAno.textContent = array[4]
        thTerminada.textContent = array[5]


        tabla.appendChild(theader)
        theader.appendChild(thTitle)
        theader.appendChild(thAno)
        theader.appendChild(thCadena)
        theader.appendChild(thDirector)
        theader.appendChild(thTerminada)
    }
}

function creacionTabla(ano,cadena,director,titulo,terminada) {
    const fila1 = crearFilas()
    const col1 = crearColumnaValor();
    col2 = crearColumnaValor();
    const col3 = crearColumnaValor();
    const col4 = crearColumnaValor();
    const col5 = crearColumnaValor();
    col1.textContent = titulo;
    col2.textContent = ano;
    col3.textContent = cadena;
    col4.textContent = director;
    col5.textContent = terminada;
    
    fila1.appendChild(col1)
    fila1.appendChild(col2)
    fila1.appendChild(col3)
    fila1.appendChild(col4)
    fila1.appendChild(col5)
    tabla.appendChild(fila1);

    if (terminada  === "1") {
        col5.innerHTML = "<img src='./ok-1976099__340.png'>"
    }else{
        col5.innerHTML = "<img src='./Cross_red_circle.svg.png'>"
    }
    verificarAno(ano)
}

function crearFilas() {
    const fila = document.createElement("tr")
    fila.className= "bordes";
    return fila;
}

function crearColumnaValor() {
    const columnaValor = document.createElement("td")
    columnaValor.className = "bordes";
    return columnaValor;
}

function verificarAno(valorAno) {
    if (valorAno < 2000) {
        col2.className = "amarillo"
    }else if(valorAno >= 2001 && valorAno <= 2010){
        col2.className = "rojo"
    }else if(valorAno >= 2011){
        col2.className = "verde";
    }
}
