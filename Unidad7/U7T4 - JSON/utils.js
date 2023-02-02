const tabla = document.getElementById('tablaJSON');
window.addEventListener("load",recogerJSON);
var arrayTittle;
var contador = 0;

function recogerJSON() {
    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
        peticion.onreadystatechange = recogerInformacion;
        peticion.open('GET',"http://localhost:8090/Unidad7/U7T4 - JSON/series.json");
        peticion.send()
    }
}

function recogerInformacion() {
    if (peticion.readyState === 4) {
        if (peticion.status === 200) {
            const resultado = JSON.parse(peticion.responseText);
            const longitudSeries = resultado.Series;
            for (let index = 0; index < longitudSeries.length; index++) {
                creacionTheaders(arrayTittle=Object.keys(resultado.Series[index]))
                creacionTabla(resultado.Series[index].ano,resultado.Series[index].cadena,resultado.Series[index].director,resultado.Series[index].titulo,resultado.Series[index].terminada)
            }
        }
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

    if (terminada  === "si") {
        col5.innerHTML = "<img src='./ok-1976099__340.png'>"
    }else{
        col5.innerHTML = "<img src='./Cross_red_circle.svg.png'>"
    }
    verificarAno(ano)
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

        thTitle.textContent = array[0]
        thCadena.textContent = array[1]
        thDirector.textContent = array[2]
        thAno.textContent = array[3]
        thTerminada.textContent = array[4]


        tabla.appendChild(theader)
        theader.appendChild(thTitle)
        theader.appendChild(thAno)
        theader.appendChild(thCadena)
        theader.appendChild(thDirector)
        theader.appendChild(thTerminada)
    }
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