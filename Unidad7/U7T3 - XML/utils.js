window.addEventListener("load",recogerXML);
var nodeName;
var valorTitulo;
var valorCadena;
var valorDirector;
var valorAno;
var valorTerminada;
var titulo;
var cadena;
var director;
var ano;
var terminada;
var nodeNameTitulo;
var nodeNameAno;
var nodeNameDirector;
var nodeNameCadena;
var nodeNameTerminada;
var contador = 0;
var col2;

function recogerXML() {
    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
        peticion.onreadystatechange = mostrarTabla;
        peticion.open("GET","http://localhost:8090/Unidad7/U7T3 - XML/peliculas.xml")
        peticion.send();
    }
}

function mostrarTabla() {
    if (peticion.readyState === 4) {
        if(peticion.status === 200){
            const resultado = peticion.responseXML;
            const xmlSerie=resultado.getElementsByTagName("serie")
            for (let index = 0; index < xmlSerie.length; index++) {
                if(xmlSerie[index].nodeName === "serie"){
                    titulo = xmlSerie[index].getElementsByTagName("titulo")
                    nodeNameTitulo = titulo[0].nodeName;          
                    cadena = xmlSerie[index].getElementsByTagName("cadena")
                    nodeNameCadena = cadena[0].nodeName;          
                    director = xmlSerie[index].getElementsByTagName("Director")
                    nodeNameDirector = director[0].nodeName;          
                    ano = xmlSerie[index].getElementsByTagName("Ano")
                    nodeNameAno = ano[0].nodeName;          
                    terminada = xmlSerie[index].getElementsByTagName("terminada")
                    nodeNameTerminada = terminada[0].nodeName;          
                    valorTitulo= titulo[0].textContent;
                    valorCadena= cadena[0].textContent;
                    valorDirector= director[0].textContent;
                    valorAno= ano[0].textContent;
                    valorTerminada= terminada[0].textContent;
                    crearTabla()
                }
            }
        }
    }
}

function verificarAno() {
    if (valorAno < 2000) {
        col2.className = "amarillo"
    }else if(valorAno >= 2001 && valorAno <= 2010){
        col2.className = "rojo"
    }else if(valorAno >= 2011){
        col2.className = "verde";
    }
}

function crearTabla() {
    var tabla = document.getElementById("tabla");
    tabla.className = "bordes";
    const fila1 = crearFilas();
    const fila2 = crearFilas();
    const col1 = crearColumnaValor();
    col2 = crearColumnaValor();
    const col3 = crearColumnaValor();
    const col4 = crearColumnaValor();
    const col5 = crearColumnaValor();
    col1.textContent = valorTitulo;
    col2.textContent=valorAno;
    col3.textContent=valorDirector;
    col4.textContent=valorCadena;
    if (valorTerminada  === "Si") {
        col5.innerHTML = "<img src='./ok-1976099__340.png'>"
    }else{
        col5.innerHTML = "<img src='./Cross_red_circle.svg.png'>"
    }
    verificarAno();

    tabla.appendChild(fila2);
    fila1.appendChild(col1);
    fila1.appendChild(col2);
    fila1.appendChild(col3);
    fila1.appendChild(col4);
    fila1.appendChild(col5);
    crearCabezera()
    tabla.appendChild(fila1);
}

function crearCabezera() {
    if(contador <= 0){
        contador ++;
        const thead = document.createElement("thead");
        const cabeceraSerie = document.createElement("th");
        const cabeceraDirector = document.createElement("th");
        const cabeceraCadena = document.createElement("th");
        const cabeceraAno = document.createElement("th");
        const cabeceraTerminada = document.createElement("th");
        thead.className = "bordes";
        cabeceraSerie.className = "bordes";
        cabeceraDirector.className = "bordes";
        cabeceraCadena.className = "bordes";
        cabeceraAno.className = "bordes";
        cabeceraTerminada.className = "bordes";

        cabeceraSerie.textContent = nodeNameTitulo;
        cabeceraDirector.textContent = nodeNameDirector;
        cabeceraCadena.textContent = nodeNameCadena;
        cabeceraAno.textContent = nodeNameAno;
        cabeceraTerminada.textContent = nodeNameTerminada;

        tabla.appendChild(thead);
        thead.appendChild(cabeceraSerie)
        thead.appendChild(cabeceraAno)
        thead.appendChild(cabeceraDirector)
        thead.appendChild(cabeceraCadena)
        thead.appendChild(cabeceraTerminada)
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