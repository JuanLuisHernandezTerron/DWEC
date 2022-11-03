const arrayDiscos = [];
class Disco{
    constructor(){
        this._nombreDisco = "";
        this._grupoMusica_cantante = "";
        this._anoPublicacion = "";
        this._localizacion = 0;
        this._prestado = new Boolean(false);
    }

    darValorDisco(nombre,grupo,ano,localizacion){
        this._nombreDisco = nombre;
        this._grupoMusica_cantante =grupo;
        this._anoPublicacion =ano;
        this._localizacion = localizacion;
    }

    set setLocalizacion(localizacion){
        this._localizacion = localizacion;
    }

    es_Prestado(){
        if(this._prestado === false){
            this._prestado = true;
        }else{
            this._prestado = false;
        }
    }

    mostrarInformacionDisco(){
        console.log("El nombre del disco es "+this._nombreDisco+ ", su grupo de musica/cantante es "+ this._grupoMusica_cantante +", su localizacion de librerias "+this._localizacion+" y esta el disco esta "+this._prestado+" false(No esta prestado),true(Está prestado)");
    }

    anadirDisco(){
        arrayDiscos.push(this);
    }
}

let disco1 = new Disco();
disco1.darValorDisco("disco1","grupo1","2001")
let disco2 = new Disco();
disco1.darValorDisco("disco2","grupo2","2005")
let disco3 = new Disco();
disco1.darValorDisco("disco3","grupo3","2006")

disco1.anadirDisco();
disco2.anadirDisco();
disco3.anadirDisco();

switch (Number(prompt("Que quieres hacer \n"+
    "1: Mostrar numero Discos\n"+ 
    "2: Mostrar listado Discos\n"+
    "3: Mostrar un intervalo de Discos\n"+
    "4: Añadir un Disco\n"+
    "5: Borrar un Disco\n"+
    "6: Consultar un Disco \n (INSERTE NUMERO, GRACIAS)\n"))){
        case 1:
            numeroDisco();
            break;
        case 2:
            mostrarDiscos();
            break;
        case 3:
            intervaloDisco();
            break;
        case 4:
            anadirDisco();
            break;
        case 5:
            borrarDisco();
            break;
        case 6:
            consultarDisco();
            break;
        default:
            break;
    }

    function consultarDisco() {
        switch (Number(prompt("Quieres consultar por: 1. Posicion\n2. Nombre"))) {
            case 1:
                mostrarElementoPosicion(prompt("Dime una posicion para saber el disco"));
                break;
    
            case 2:
                mostrarDiscoElemento(prompt("Dime el nombre del disco para saber su posición"));
                break;
            default:
                break;
        }
    }

    function mostrarDiscoElemento(disco) {
        alert("El disco "+disco+ " está en la posicion "+ arrayDiscos.indexOf(disco)._nombreDisco);
    }

    function mostrarElementoPosicion(posicion) {
        alert("El disco que está en la posicion que has indicado es: "+arrayDiscos[posicion]._nombreDisco);
    }

    function borrarDisco() {
        switch (Number(prompt("Quieres borrar: 1. Principio\n2. Final"))) {
            case 1:
                borrarElementoPrincipio();
                break;
    
            case 2:
                borrarElementoFinal();
                break;
            default:
                break;
        }
    }

    function mostrarDiscos() {
        switch (Number(prompt("Como quieres que lo muestre?\n1:Orden del array\n2:Del revés\n3:Ordenado Alfabéticamente (INSERTE NUMERO, GRACIAS)"))) {
            case 1:
                mostrarTodosDiscos();
                break;
            case 2:
                DiscoReverse();
                break;
            case 3:
               ordenadoAlfa();
                break;
            default:
                break;
        }
    }

    function borrarElementoFinal() {
        alert("Se ha eliminado el disco "+arrayDiscos.pop())
        mostrarTodosDiscos();
    }

    function borrarElementoPrincipio() {
        alert("Se ha eliminado el disco "+arrayDiscos.shift())
        mostrarTodosDiscos();
    }

    function anadirDisco() {
        switch (Number(prompt("Quieres ingresarlo:\n 1. Principio\n2. Final"))) {
            case 1:
                anadirDiscoPrincipio(prompt("Que disco quieres añadir?"));
                break;
            case 2:
                anadirDiscoFinal(prompt("Que disco quieres añadir?"));
                break;
        
            default:
                break;
        }
    }

    function anadirDiscoPrincipio(nombre) {
        let disco = new Disco().darValorDisco(nombre,"","",0);
        
        arrayDiscos.unshift(disco)
        mostrarTodosDiscos();
    }

    function anadirDiscoFinal(nombre) {
        let disco = new Disco().darValorDisco(nombre,"","",0);
        arrayDiscos.push(disco)
        mostrarTodosDiscos();
    }

    function intervaloDisco() {
        var inicioFin = prompt("Dime el inicio y el fin del disco quieres sacar, Ejemplo: XX/XX")
        let numerosIntervalo = inicioFin.split("/");
        let intervaloInicio = numerosIntervalo[0];
        let intervaloFinal = numerosIntervalo[1];
        muestraIntervaloPaises(arrayDiscos,intervaloInicio,intervaloFinal);
    }

    function muestraIntervaloPaises(inicio,fin) {
        alert("Los discos que están en el intervalo son "+arrayDiscos.slice(inicio,fin)._nombreDisco);
    }

    function numeroDisco() {
        alert("Hay "+arrayDiscos.length+ " discos");
    }



    function mostrarTodosDiscos() {
        for (let index = 0; index < arrayDiscos.length; index++) {
            let parrafo = document.createElement("li");
            document.getElementById("listaDiscos").appendChild(parrafo).innerHTML = arrayDiscos[index]._nombreDisco;
        }
    }

    function DiscoReverse() {
        let arrayDiscoAUX = [].concat(arrayDiscos);
        arrayDiscoAUX.reverse();
        for (let index = 0; index < arrayDiscoAUX.length; index++) {
            let parrafo = document.createElement("li");
            document.getElementById("listaDiscos").appendChild(parrafo).innerHTML = arrayDiscoAUX[index]._nombreDisco;
        }
    }

    function ordenadoAlfa() {
        let arrayDiscoAUX = [].concat(arrayDiscos);
        arrayDiscoAUX.sort()
        for (let index = 0; index < arrayDiscoAUX.length; index++) {
            let parrafo = document.createElement("li");
            document.getElementById("listaDiscos").appendChild(parrafo).innerHTML = arrayDiscoAUX[index]._nombreDisco;
        }
    }

