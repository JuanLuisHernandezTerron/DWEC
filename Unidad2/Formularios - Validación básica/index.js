const $Form = document.getElementById("formulario");
const $NombreDisc = document.getElementById("nombreDisc");
const $grupoMusica = document.getElementById("musica");
const $anoPublicacion = document.getElementById("anoPubli");
const $localizacion = document.getElementById("localizionDisco");
const $prestado = document.getElementById("checkboxPrestado");

function handleSubmit(e) {  
    const nombre = $NombreDisc.value;
    const grupoMusicCantante = $grupoMusica.value;
    const anoPubli = $anoPublicacion.value;
    const localizacion = $localizacion.value;
    const es_Valid = new Boolean(true);

    if (nombre === false || isValidNombreGrupoMusica(nombre) === false) {
        alert("Has introducido mal el nombre")
        es_Valid = false;
    }

    if (grupoMusicCantante === false || isValidNombreGrupoMusica(grupoMusicCantante) === false) {
        alert("Has introducido mal el nombre del grupo de musica/cantante")
        es_Valid = false;
    }
    
    if (grupoMusicCantante === false || isValidNombreGrupoMusica(grupoMusicCantante) === false) {
        alert("Has introducido mal el nombre del grupo de musica/cantante")
        es_Valid = false;
    }
    
    if(anoPubli === false ||isValidAnoPubli(anoPubli) === false){
        alert("Has introducido mal el año")
        es_Valid = false;
    }

    if (!(localizacion === false || isvalidNumber(localizacion) === true)) {
        alert("No has introducido bien el numero")
        es_Valid = false;
    }
}

window.addEventListener('load',handleSubmit);
$Form.addEventListener('submit',handleSubmit);

function isValidNombreGrupoMusica(nombre) {
    const validacion = /^\w{1,20}$/
    return validacion.test(nombre);
}

function isValidAnoPubli(anoPubli) {
    const validacion= /^\d{4}$/
    return validacion.test(anoPubli);
}

function isvalidNumber(numero) {
    const validacion=/^\d+$/
    return validacion.test(numero);
}