
/**
 * @author Juan Luis Hernandez Terron
 * @Array Este array contiene todos los paises 
 */

var arrayPaises = ["Afghanistan", "Indonesia", "Spain", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
"Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
"Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
"Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
"Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
"Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
"Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
"Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
"Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
"Hungary", "Iceland", "India", "Albania", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
"Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
"Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
"Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
"Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
"Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
"Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Sao Tome",
"Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
"Solomon Islands", "Somalia", "South Africa", "Algeria", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
"Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
"Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
"Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

/**
 * @switch En este switch, estaremos ejecutando la tarea que el usuario a decidido
 */
    switch (Number(prompt("Que quieres hacer \n"+
    "1: Mostrar numero paises\n"+ 
    "2: Mostrar listado paises\n"+
    "3: Mostrar un intervalo de paises\n"+
    "4: Añadir un país\n"+
    "5: Borrar un pais\n"+
    "6: Consultar un pais \n (INSERTE NUMERO, GRACIAS)\n"))){
        case 1:
            numeroPaises();
            break;
        case 2:
            mostrarPaises();
            break;
        case 3:
            intervaloPaises();
            break;
        case 4:
            anadirPais();
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

/**
 * @function consultarPaises Esta funcion contiene un switch que da opcion a consultar por poscion o por nombre
 */

function consultarDisco() {
    switch (Number(prompt("Quieres consultar por: 1. Posicion\n2. Nombre"))) {
        case 1:
            mostrarElementoPosicion(prompt("Dime una posicion para saber el pais"));
            break;

        case 2:
            mostrarDiscoElemento(prompt("Dime el nombre del pais para saber su posición"));
            break;
        default:
            break;
    }
}

/**
 * @function borrarPais Esta funcion contiene un switch donde podremos borrar un elemento al final o al principio del array
 */

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

/**
 * @function anadirPais Esta funcion contiene un switch donde podremos añadir un pais 
 */

function anadirPais() {
    switch (Number(prompt("Quieres ingresarlo:\n 1. Principio\n2. Final"))) {
        case 1:
            anadirDiscoPrincipio(prompt("Que pais quieres añadir?"));
            break;
        case 2:
            anadirDiscoFinal(prompt("Que pais quieres añadir?"));
            break;
    
        default:
            break;
    }
}

/**
 * @function mostrarPaises Esta funcion contiene un switch donde podremos consultar un pais/paises 
 */


function mostrarPaises() {
        switch (Number(prompt("Como quieres que lo muestre?\n1:Orden del array\n2:Del revés\n3:Ordenado Alfabéticamente (INSERTE NUMERO, GRACIAS)"))) {
            case 1:
                mostrarTodosPaises();
                break;
            case 2:
                paisReverse();
                break;
            case 3:
               ordenadoAlfa();
                break;
            default:
                break;
        }
}

/**
 * @function intervaloPaises Nos mostrará que paises está en el intervalo que diga por parametro el usuario
 * @Array numerosIntervalo Guarda en un array el inicio del intervalo y el final del intervalo.
 * @param intervaloFinal  Guarda el final del split
 * @param intervaloInicio  Guarda el inicio del split
 */

function intervaloPaises() {
    var inicioFin = prompt("Dime el inicio y el fin de los paises que quieres sacar, Ejemplo: XX/XX")
    let numerosIntervalo = inicioFin.split("/");
    let intervaloInicio = numerosIntervalo[0];
    let intervaloFinal = numerosIntervalo[1];
    muestraIntervaloPaises(arrayPaises,intervaloInicio,intervaloFinal);
}

/**
 * @function mostrarTodosPaises Recorrer todo el array (Muestra todos los paises)
 */

function mostrarTodosPaises() {
    for (let index = 0; index < arrayPaises.length; index++) {
        let parrafo = document.createElement("li");
        document.getElementById("listaPaises").appendChild(parrafo).innerHTML = arrayPaises[index];
    }
}

/**
 * @function muestraIntervaloPaises Nos muestra los paises que están en el intervalo que el usuario a introducido
 * 
 */

function muestraIntervaloPaises(inicio,fin) {
    alert("Los paises que están en el intervalo son "+arrayPaises.slice(inicio,fin));
}

/**
 * @function mostrarPaisElemento Muestra la posicion en la que está el pais que ha introducido el usuario
 */

function mostrarDiscoElemento(pais) {
    alert("El pais "+pais+ " está en la posicion "+ arrayPaises.indexOf(pais));
}

/**
 * 
 * @function mostrarElementoPosicion Muestra el pais que está la posicion que ha pasado el usuario
 */


function mostrarElementoPosicion(posicion) {
    alert("El pais que está en la posicion que has indicado es: "+arrayPaises[posicion]);
}


/**
 * @function borrarElementoFinal borra el ultimo país del array
 */
function borrarElementoFinal() {
    alert("Se ha eliminado el pais "+arrayPaises.pop())
    mostrarTodosPaises();
}
/**
 * @function borrarElementoPrincipio borra el primer pais del array
 */
function borrarElementoPrincipio() {
    alert("Se ha eliminado el pais "+arrayPaises.shift())
    mostrarTodosPaises();
}
/**
 * 
 * @function anadirPaisFinal Añade un país al final del array y lo muestra con la funcion mostrarTodosPaises()
 */
function anadirDiscoFinal(paisAnadir) {
    arrayPaises.push(paisAnadir)
    mostrarTodosPaises();
}
/**
 * 
 * @function anadirPaisPrincipio Añade un país al principio del array y lo muestra con  la  funcion mostrarTodosPaises() 
 */
function anadirDiscoPrincipio(paisAnadir) {
    arrayPaises.unshift(paisAnadir)
    mostrarTodosPaises();
}
/**
 * @function numeroPaises Muestra el numero de paises que hay en el array
 */
function numeroPaises() {
    alert("Hay "+arrayPaises.length+ " paises");
}
/**
 * @function paisReverse Muestra el array al revés
 * @for Con el for recorreremos el array y lo añadiremos en la lista que tenemos en el html 
 */
function paisReverse() {
    let arrayPaisesAUX = [].concat(arrayPaises);
    arrayPaisesAUX.reverse();
    for (let index = 0; index < arrayPaisesAUX.length; index++) {
        let parrafo = document.createElement("li");
        document.getElementById("listaPaises").appendChild(parrafo).innerHTML = arrayPaisesAUX[index];
    }
}
/**
 * @function ordenadoAlfa Ordena un arrayAuxiliar que he creado con los mismo valores que el array padre (arrayPaises)
 */
function ordenadoAlfa() {
    let arrayPaisesAUX = [].concat(arrayPaises);
    arrayPaisesAUX.sort()
    for (let index = 0; index < arrayPaisesAUX.length; index++) {
        let parrafo = document.createElement("li");
        document.getElementById("listaPaises").appendChild(parrafo).innerHTML = arrayPaisesAUX[index];
    }
}







