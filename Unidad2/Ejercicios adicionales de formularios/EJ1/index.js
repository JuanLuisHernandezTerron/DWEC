const $FORM = document.getElementById("formularioMain");
const $Nombres = document.getElementById("nombre");
const $DNI = document.getElementById("dni");
const $contrasena = document.getElementById("contrasena");

function eventos() {
    $Nombres.addEventListener("Change",isValidNombre($Nombres.value))
    $DNI.addEventListener("Change",isValidDNI($DNI.value))
    $contrasena.addEventListener("Change",isValidContrasena($contrasena.value))
}
eventos();
function handledSubmit(e) {
    const dni = $DNI.value;
    const nombres = $Nombres.value
    const contrasena = $DNI.contrasena;
    isValidDNI(dni)
    isValidNombre(nombres)
    isValidContrasena(contrasena)
}

$FORM.addEventListener("submit",handledSubmit,false);
function isValidDNI(dni) {
    const validacion = /^\d{8}[A-Z]$/;
    if (validacion.test(dni) == false) {
        alert("Has introducido mal el dni")
        $DNI.value="";
    }
}

function isValidNombre(nombre) {
    const validacion = /^[a-zA-Z]+$|^[a-zA-Z]+\s[a-zA-Z]+$/;
    if (validacion.test(nombre) == false) {
        alert("Has introducido mal los nombres")
        $Nombres.value="";
    }
}

function isValidContrasena(contrasena) {
    const validacion = /^\w{8,10}$/;
    if (validacion.test(contrasena) == false) {
        alert("Has introducido mal la contraseña")
        $contrasena.value="";
    }
}