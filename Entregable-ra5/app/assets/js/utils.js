/*Ejercicio-1*/

/**
 * @window Creamos un evento que cargue la página y que cuando la recargue que llame a la funcion validaSLUG
 */
window.addEventListener("load",validarSLUG,false);
/**
 * @const slug Guarda el slug de la pagina web EJ: i,login,registro
 * @const a Guarda todos los a del html
 */
function validarSLUG(e) {
    console.log("Entrando en la funcion validarSLUG");
    const slug = recogerSlug();
    const a = document.querySelectorAll("a");
    for (let i = 0; i < a.length; i++) {
        if (a[i].firstChild.id == slug) {
            a[i].firstChild.className="verificadoSLUG";
        }
    }
    console.log("Saliendo de la funcion validaSLUG")
}
/**
 * @const slug guarda el slug de la web
 * @returns Devuelve el slug de la pagina web
 */
function recogerSlug() {
    console.log("Entrando en la funcion recogerSlug");
    const slug = window.location.pathname;
    let arraySlug = slug.split("/");
    const auxSlug = arraySlug[2];
    console.log("Saliendo de la funcion recogerSlug con el valor a esperar:"+auxSlug.substring(0,auxSlug.length-5));
    return auxSlug.substring(0,auxSlug.length-5);
}

/*Ejercicio-2*/
/**
 * Creo una clase runner donde tenemos un método que nos calcula la diferencia entre las fechas.
 */
class Runner{
    constructor(nombre,horaInicio,ciudad){
        this._nombre = nombre;
        this._horaInicio = new Date(horaInicio);
        this._ciudad = ciudad;
    }
    get getDorsal(){
        return this._dorsal;
    }
    get getHoraInicio(){
        return this._horaInicio;
    }
    get getCiudad(){
        return this._ciudad;
    }

    calcularTiempo(){
        console.log("Entrando en el metodo calcularTiempo()")
        let horaActual = new Date()
        const diferenciaMilisgundos = this.getHoraInicio - horaActual;
        const diferenciaDias = parseInt((diferenciaMilisgundos/(1000*60*60*24)));
        const diferenciaHoras = parseInt((diferenciaMilisgundos/(1000*60*60)))-(24*diferenciaDias);
        const diferenciaMinutos = parseInt((diferenciaMilisgundos/(1000*60)))-(60*diferenciaHoras)-(24*60*diferenciaDias);
        const diferenciaSegundos = parseInt((diferenciaMilisgundos/1000)) - (diferenciaHoras*60*60)-(diferenciaMinutos*60)-(diferenciaDias*24*60*60);
        return diferenciaDias + ":" + diferenciaHoras + ":" + diferenciaMinutos +":"+diferenciaSegundos;
    }
}
/**
 * *Esta función la utilizo para que solo funcione cuando esté en la pagina web de index.html
 */
empezarEventoContador();
function empezarEventoContador() {
    if (recogerSlug() == "index") {
        window.addEventListener("load",horaEmpezarRuuning,false);
    }
}
/**
 * @returns Devuelve el evento runner creado
 */
function crearRunning() {
    const runner = new Runner("Carrera contra el cancer / BormujosAyuda","2022-12-18T17:30:10","Bormujos");
    return runner;      
}
/**
 * *Nos muestra en el index.html si el evento ha finalizado o no.
 * @const htmlH2 Guarda las etiquetas h2 del html
 * @const runner Guardamos el evento creado en la variable
 * @const fechaAUX Guarda lo que queda para llegar a la fecha (diferencia de tiempo)
 * @var interval Creamos un intervalo donde, si es menor o igual a 0, saldrá que el evento ha sido finalizado y al mismo tiempo paramos el intervalo, si no, nos mostrará el contador.
 */

function horaEmpezarRuuning() {
    console.log("Entrando Función horaEmpezarRuuning");
    const htmlH2 = document.querySelector("h2");
    const runner = crearRunning();
    var interval = setInterval(()=>{
    const fechaAUX = runner.calcularTiempo();
    let fechas = runner.calcularTiempo().split(":");
    let dias = fechas[0];
    let horas = fechas[1];
    let minutos = fechas[2];
    let segundos = fechas[3];
    (dias <= 0 && horas <= 0 && segundos <= 0 && minutos <= 0) ? ((htmlH2.textContent = "Ha finalizado el evento!"),(clearInterval(interval))): htmlH2.textContent = "Quedan "+fechaAUX+ ", para que empiece el evento!";
    },1000);
    console.log("Saliendo de la funcion horaEmpezarRuuning");
}

/*Ejercicio-3*/

empezarEvento();
function empezarEvento() {
    if (recogerSlug() == "eventos") {
        window.addEventListener("load",cargarInfoEvent,false);
    }
}

/**
 * *Esta función nos muestra por pantalla la informacion del evento, al final de la función tablaRunnersload(), nos carga la tablas de runner por defecto que he creado, llama a otra funcion[creacionDefaultsRunners()] que nos devuelve un array de los runners defaults. 
 * @const fechaEvento Guarda la fecha del evento.
 */
function cargarInfoEvent() {
    console.log("Entrando funcion cargarInfoEvent");
    const etiquetaP = document.querySelectorAll("p");
    const runner = crearRunning();
    const fechaEvento = runner.getHoraInicio.getDate()+ "/"+(runner.getHoraInicio.getMonth()+1)+"/"+runner.getHoraInicio.getFullYear()+"  "+runner.getHoraInicio.getHours()+":"+runner.getHoraInicio.getMinutes()+":"+runner.getHoraInicio.getSeconds();

    for (let i = 0; i < etiquetaP.length; i++) {
        if (etiquetaP[i].id=="nombre-Evento") {
            etiquetaP[i].textContent=runner._nombre;
        }else if(etiquetaP[i].id=="localidadEvento"){
            etiquetaP[i].textContent=runner.getCiudad;
        }else if(etiquetaP[i].id=="fechaEvento"){
            etiquetaP[i].textContent=fechaEvento;
        }
        etiquetaP[i].className="letrero"
    }
    tablaRunnersload(creacionDefaultsRunners())
    console.log("Saliendo de la funcion cargarInfoEvent")
}

class Runner2{
    constructor(nombre,apellidos,dorsal,horaInicio,horaFin){
       this._nombre = nombre;
       this._apellidos = apellidos;
       this._dorsal = dorsal;
       this._horaInicio = new Date(horaInicio);
       this.setHoraFin(horaFin)
       const arrayRunners =[];
       arrayRunners.push(this);
    }

    get arrayRunners(){
        return this._arrayRunners;
    }
    
    get getNombre(){
        return this._nombre;
    }

    get getApellidos(){
        return this._apellidos;
    }
    get getDorsal(){
       return this._dorsal;
    }
    get getHoraInicio(){
       return this._horaInicio;
    }
    get getHoraFin(){
       return this._horaFin;
    }

    setHoraFin(horafin){
        if (horafin == "") {
            this._horaFin = "00:00:00";
        }else{
            this._horaFin = new Date(horafin);
        }
    }
 
    calcularTiempo(){
       console.log("Entrando en el metodo calcularTiempo()")
          if (this.getHoraInicio === false || this.getHoraFin === null) {
             console.log("Saliendo del metodo calcularTiempo(), con valor esperado:"+"00:00:00")
             return "00:00:00";
          }else{
            const diferenciaMilisgundos = this.getHoraInicio - this.getHoraFin;
            const diferenciaDias = parseInt((diferenciaMilisgundos/(1000*60*60*24)));
            const diferenciaHoras = parseInt((diferenciaMilisgundos/(1000*60*60)))-(24*diferenciaDias);
            const diferenciaMinutos = parseInt((diferenciaMilisgundos/(1000*60)))-(60*diferenciaHoras)-(24*60*diferenciaDias);
            const diferenciaSegundos = parseInt((diferenciaMilisgundos/1000)) - (diferenciaHoras*60*60)-(diferenciaMinutos*60)-(diferenciaDias*24*60*60);
            console.log("Saliendo del metodo calcularTiempo(), con valor esperado: "+diferenciaHoras + ":" + diferenciaMinutos + ":" + diferenciaSegundos)
            return Math.abs(diferenciaHoras) + ":" + Math.abs(diferenciaMinutos) + ":" + Math.abs(diferenciaSegundos);
          }
    }
}

hacerEventoFormulario();
/**
 * *Esta función la utilizo para que solo funcione cuando esté en la pagina web de eventos.html
 */
function hacerEventoFormulario() {
    if (recogerSlug() == "eventos") {
        const formulario = document.getElementById("formulario-id");
        formulario.addEventListener("submit",handleSubmit,false);
    }
}

var contador = 0;
var arrayRunners = []; //Guardo este array afuera para que cuando entre en la función no se resetee.

/**
 * *Cuando enviemos el formulario, si el dorsal y la fecha son correctas, insertaremos en la tabla el tiempo del runner que hemos creado
 * @const isValidFecha Guarda true|false si la fecha es valida o no.
 * @const isValidDorsal Guarda true|false si el dorsal es valido o no.
 */
function handleSubmit(e) {
    console.log("Entrando en la funcion handleSubmit[Eventos.html]");
    (contador < 1) ? ((arrayRunners = creacionDefaultsRunners()),(contador++)) : contador++;
    e.preventDefault();
    const inputsAll = document.querySelectorAll("input");
    const nombreRunner = inputsAll[0].value;
    const apellidos = inputsAll[1].value;
    const dorsal = inputsAll[2].value;
    const fechaIni = inputsAll[3].value;
    const fechafin = inputsAll[4].value;
    let runner5 = new Runner2(nombreRunner,apellidos,dorsal,fechaIni,fechafin);
    const isValidFecha = validFecha(crearRunning().getHoraInicio);
    const isValidDorsal = validDorsal(arrayRunners,runner5.getDorsal);
    if (isValidFecha && isValidDorsal) { //Si los 2 es true insertamos el tiempo del runner
        reiniciarInputs(inputsAll); //Al enviar el formulario no se me resetea los inputs, he creado esta función para que se reseteee
        arrayRunners.push(runner5);
        alert("Runner Registrado!");
        tablaRunnersNew(arrayRunners); //Insertamos en la tabla a los runners y al que hemos creado con el formulario
    }else{
        setTimeout(()=>{
            alert("NO SE HA PODIDO INSCRIBIR EL TIEMPO")
        },1000);
    }
    console.log("Saliendo de la funcion handleSubmit[Eventos.html]");
}

/**
 * *Esta funcion reinicia todos los inputs del formulario a cadena vacia.
 * @param {object} inputs Contiene todas las etiquetas inputs del formulario y su value
 */

function reiniciarInputs(inputs) {
    console.log("Entrando en la funcion reiniciarInputs");
    const inputsGlobal = inputs;
    for (let i = 0; i < inputsGlobal.length; i++) {
        inputsGlobal[i].value= "";
    }
    console.log("Saliendo de la funcion reiniciarInputs");
}
/**
 * *En esta función estamos creando runners por defecto para que la tabla no se vea muy vacía
 * @returns Devuelve un array con todos los runners que hemos creado por defecto
 */
function creacionDefaultsRunners() {
    console.log("Entrando en la función creacionDefaultsRunners")
    let runner1 = new Runner2("Jose Luis","Perez Perejon",20,"09-11-2022 10:35:20","09-11-2022 14:40:30");
    let runner2 = new Runner2("Andres","Jimenez Clarke",18,"10-10-2022 18:10:50","10-10-2022 22:11:24");
    let runner3 = new Runner2("Manuel","José Perez",21,"08-11-2022 17:30:20","08-11-2022 21:10:10");
    let runner4 = new Runner2("Antonio","Camilo Pajarez",25,"08-11-2022 17:30:20","08-11-2022 23:01:40");
    const arrayDefaultRunners = [];
    arrayDefaultRunners.push(runner1,runner2,runner3,runner4);
    console.log("Saliendo de la función creacionDefaultsRunners")
    return arrayDefaultRunners;
}

/**
 * *En esta función validaremos la fecha del evento con la fecha actual.
 * @param {Date} horaInicio Contiene la hora de inicio del evento
 * @returns Devuelve true si la fecha de inicio del evento es menor a la fecha actual, si es mayor, el evento aún no se ha celebrado.
 */
function validFecha(horaInicio) {
    console.log("Entrando en la funcion de validFecha");
    const horaInicioEvent = new Date(horaInicio);
    const horaActual = new Date();
    const fechaWarning = document.getElementById("mensajeWarningFecha");
    if (Date.parse(horaInicioEvent) < Date.parse(horaActual)) {
        fechaWarning.className = "warningSolucionado";
        return true;
    }else{
        fechaWarning.className = "warning";
        fechaWarning.textContent = "El evento aún no ha finalizado, recuerda que para ingresar runners, el evento tiene que a ver acabado";
    }
    console.log("Saliendo de la funcion de validFecha");
}
/**
 * *Esta función valida si el dorsal existe o no en los runners que hemos creado previamente.
 * @param {Array} arrayRunners Array que contiene todos los runners que hemos creado previamente.
 * @param {Number} dorsal dorsal del runner que estamos creadndo
 * @returns devuelve true si el dorsal no se repite.
 */
function validDorsal(arrayRunners,dorsal) {
    console.log("Entrando en la función validDorsal")
    const dorsalWarning = document.getElementById("mensajeWarningDorsal");
    const arrayRunnerAUX = arrayRunners;
    var dorsalValido = new Boolean(false);

    for (let i = 0; i < arrayRunnerAUX.length; i++) {
        if (arrayRunnerAUX[i].getDorsal == dorsal) {
            dorsalValido = true;
        }
    }

    if (dorsalValido == false) {
        dorsalWarning.className = "warningSolucionado";
        return true
        
    }else{
        dorsalWarning.className = "warning";
        dorsalWarning.textContent = "El dorsal que has introducido ya está registrado";
    }
    console.log("Saliendo de la función validDorsal")
}
/**
 * *En esta función estamos ordenando por el tiempo de cada runner
 * @param {Date} a contiene el primer tiempo
 * @param {Date} b contiene el segundo tiempo
 * @returns dependiendo del resultado devuelve -1 , 1 o 0, si es -1 el primer tiempo es ascendente si es -1 es descendente y si es 0 es igual
 */
function compare(a,b) {
    console.log("Entrando en la funcion compare()")
    if(a.calcularTiempo() < b.calcularTiempo()){
       console.log("Saliendo de la funcion compare()")
       return -1;
    }else if(a.calcularTiempo() > b.calcularTiempo()){
       console.log("Saliendo de la funcion compare()")
       return 1;
    }else{
       console.log("Saliendo de la funcion compare()")
       return 0;
    }
 }
/**
 * *Esta funcion cuando se recargue la pagina rellenaremos la tabla con los datos de los runners que hemos creado por defecto.
 * @const horaInicio Guardamos la hora de inicio del evento.
 * @const horaFin Guardamos la horaFin donde el runner a acabado el evento
 * @const diferenciaCarrera calculamos la diferencia que hay de tiempo entre las la hora de inicio del evento y la hora de fin del evento.
 * @param {Array} arrayRunners Array que contiene todos los runners
 */
function tablaRunnersload(arrayRunners) {
    console.log("Entrando en la funcion de tablaRunnersload")
    const runnersload = arrayRunners;
    runnersload.sort(compare); //Ordenamos el array
    if(validFecha(crearRunning().getHoraInicio)){
        const tabla = document.querySelector("tbody");
        for (let i = 0; i < runnersload.length; i++) {
            const horaInicio = runnersload[i].getHoraInicio.getHours()+":"+runnersload[i].getHoraInicio.getMinutes()+":"+runnersload[i].getHoraInicio.getSeconds();
            const horaFin = runnersload[i].getHoraFin.getHours()+":"+runnersload[i].getHoraFin.getMinutes()+":"+runnersload[i].getHoraFin.getSeconds();
            const diferenciaCarrera = runnersload[i].calcularTiempo();
            tabla.innerHTML = tabla.innerHTML+"<tr>"+"<td>"+runnersload[i].getNombre+"</td>"+"<td>"+runnersload[i].getApellidos+"</td>"+"<td>"+runnersload[i].getDorsal+"</td>"+"<td>"+horaInicio+"</td>"+"<td>"+horaFin+"</td"+"</tr>"+"<td>"+diferenciaCarrera+"</td"+"</tr>";
        }
    }
    console.log("Saliendo en la funcion de tablaRunnersload")
}
/**
 * *Esta funcion cuando se ingresemos el nuevo runner, rellenaremos la tabla con los datos de los tiempos del runner que hemos creado.
 * 
 * @param {Array} arrayRunners Array que contiene todos los runners
 */
 function tablaRunnersNew(arrayRunners) {
    console.log("Entrando en la función tablaRunnersNew")
     var horaFin = "";
     var diferenciaCarrera = null;
     const runnersnew = arrayRunners;
     runnersnew.sort(compare);
     
     if(validFecha(crearRunning().getHoraInicio)){
         const tabla = document.querySelector("tbody");
         tabla.innerHTML = "<tr>"+"<td>"+" "+"</td>"+"<td>"+" "+"</td>"+"<td>"+" "+"</td>"+"<td>"+" "+"</td>"+"<td>"+" "+"</td"+"</tr>"+"<td>"+" "+"</td"+"</tr>";
         for (let i = 0; i < runnersnew.length; i++) {
            const horaInicio = runnersnew[i].getHoraInicio.getHours()+":"+runnersnew[i].getHoraInicio.getMinutes()+":"+runnersnew[i].getHoraInicio.getSeconds();
            if (runnersnew[i].getHoraFin == "00:00:00" ) { //Si no ha ingresado una hora fin, por defecto la hora fin será 00:00:00, ya que no ha acabado aún
                horaFin = "00:00:00";
                diferenciaCarrera = "00:00:00";
            }else{
                horaFin = runnersnew[i].getHoraFin.getHours()+":"+runnersnew[i].getHoraFin.getMinutes()+":"+runnersnew[i].getHoraFin.getSeconds();
                diferenciaCarrera = runnersnew[i].calcularTiempo();
            }
            tabla.innerHTML =tabla.innerHTML +"<tr>"+"<td>"+runnersnew[i].getNombre+"</td>"+"<td>"+runnersnew[i].getApellidos+"</td>"+"<td>"+runnersnew[i].getDorsal+"</td>"+"<td>"+horaInicio+"</td>"+"<td>"+horaFin+"</td"+"</tr>"+"<td>"+diferenciaCarrera+"</td"+"</tr>";
         }
    }
    console.log("Saliendo de la función tablaRunnersNew");
}

/*Ejercicio 4 */

/**
 * *Mostramos todas las comunidad en el selector del formulario
 */
cargarComunidad();
function cargarComunidad() {
    if (recogerSlug() == "registro") {
        window.addEventListener("load",comunidadAutonomas,false);
    }
}
/**
 * *En esta funcion insertaremos los valores al select con los option y el for, si hay cambios de estado en el input, cargaremos la provincia correspondiente
 * @const arrayComunidad Contiene un array de objetos con el codigo y el nombre de la comunidad
 */
function comunidadAutonomas() {
    console.log("Entrando en la funcion comunidadAutonomas")
    const selectComunidad = document.getElementById("comuAutonoma");
    const arrayComunidad = [{"Código":01,"Literal":"Andalucia"},{"Código":02,"Literal":"Aragón"},{"Código":03,"Literal":"Asturias, Principado de"},{"Código":04,"Literal":"Balears, Illes"},{"Código":05,"Literal":"Canarias"},{"Código":06,"Literal":"Cantabria"},{"Código":07,"Literal":"Castilla y León"},{"Código":08,"Literal":"Castilla - La Mancha"},{"Código":09,"Literal":"Cataluña"},{"Código":10,"Literal":"Comunitat Valenciana"},{"Código":11,"Literal":"Extremadura"},{"Código":12,"Literal":"Galicia"},{"Código":13,"Literal":"Madrid, Comunidad de"},{"Código":14,"Literal":"Murcia, Región de"},{"Código":15,"Literal":"Navarra, Comunidad Foral de"},
    {"Código":16,"Literal":"País Vasco"},{"Código":17,"Literal":"Rioja, La"},{"Código":18,"Literal":"Ceuta"},{"Código":19,"Literal":"Melilla"}]
    
    for (let i = 0; i < arrayComunidad.length; i++) {
        selectComunidad.innerHTML = selectComunidad.innerHTML+"<option>"+arrayComunidad[i].Literal+"</option>";       
    }
    selectComunidad.addEventListener("change",function() {
        cargarProvincia(arrayComunidad); //Haremos una funcion anonima donde le pasaremos el arrayCompleto de comunidades autonomas.
    },false);
    console.log("Saliendo en la funcion comunidadAutonomas")
}

/**
 * *Muestra en el select de las provincias, todas las provincias
 * @const codigoComunidad Guarda el codigo de la comunidad que ha seleccionado en el select de comunidad 
 * @param {Array} Comunidad Guarda todas las comunidades.
 */
function cargarProvincia(Comunidad) {
    console.log("Entrando en la funcion cargarProvincia");
    const selectProvincia = document.getElementById("Ciudad");
    const arrayProvincias = [{"CPRO":04,"Provincia":"Almería","CODAUTO":01},{"CPRO":11,"Provincia":"Cádiz","CODAUTO":01},
    {"CPRO":14,"Provincia":"Córdoba","CODAUTO":01},{"CPRO":18,"Provincia":"Granada","CODAUTO":01},{"CPRO":21,"Provincia":"Huelva","CODAUTO":01},
    {"CPRO":23,"Provincia":"Jaén","CODAUTO":01},{"CPRO":29,"Provincia":"Málaga","CODAUTO":01},{"CPRO":41,"Provincia":"Sevilla","CODAUTO":01}, //FIN ANDALUCIA
    {"CPRO":22,"Provincia":"Huesca","CODAUTO":02},{"CPRO":44,"Provincia":"Teruel","CODAUTO":02},{"CPRO":50,"Provincia":"Zaragoza","CODAUTO":02},//FIN ARAGON
    {"CPRO":33,"Provincia":"Asturias","CODAUTO":03}, //FIN ASTURIAS
    {"CPRO":07,"Provincia":"Balears, Illes","CODAUTO":04}, // FIN ISLAS BALEARES
    {"CPRO":35,"Provincia":"Palmas, Las","CODAUTO":05},{"CPRO":38,"Provincia":"Santa Cruz de Tenerife","CODAUTO":05},//FIN CANARIAS
    {"CPRO":39,"Provincia":"Cantabria","CODAUTO":06}, //FIN Cantabria
    {"CPRO":05,"Provincia":"Ávila","CODAUTO":07},{"CPRO":09,"Provincia":"Burgos","CODAUTO":07},{"CPRO":24,"Provincia":"León","CODAUTO":07},
    {"CPRO":34,"Provincia":"Palencia","CODAUTO":07},{"CPRO":37,"Provincia":"Salamanca","CODAUTO":07},{"CPRO":40,"Provincia":"Segovia","CODAUTO":07},
    {"CPRO":42,"Provincia":"Soria","CODAUTO":07},{"CPRO":47,"Provincia":"Valladolid","CODAUTO":07},{"CPRO":49,"Provincia":"Zamora","CODAUTO":07}, //FIN Castilla y León	
    {"CPRO":02,"Provincia":"Albacete","CODAUTO":08},{"CPRO":13,"Provincia":"Ciudad Real","CODAUTO":08},{"CPRO":16,"Provincia":"Cuenca","CODAUTO":08},{"CPRO":19,"Provincia":"Guadalajara","CODAUTO":08},
    {"CPRO":45,"Provincia":"Toledo","CODAUTO":08}, //FIN CASTILLA LA MANCHA
    {"CPRO":08,"Provincia":"Barcelona","CODAUTO":09},{"CPRO":17,"Provincia":"Girona","CODAUTO":09},{"CPRO":25,"Provincia":"Lleida","CODAUTO":09},{"CPRO":43,"Provincia":"Tarragona","CODAUTO":09}, //Fin Cataluña
    {"CPRO":03,"Provincia":"Alicante/Alacant","CODAUTO":10},{"CPRO":12,"Provincia":"Castellón/Castelló","CODAUTO":10},{"CPRO":46,"Provincia":"Valencia/València","CODAUTO":10},//FIN VALENCIA
    {"CPRO":06,"Provincia":"Badajoz","CODAUTO":11},{"CPRO":10,"Provincia":"Cáceres","CODAUTO":11},//FIN EXTREMADURA
    {"CPRO":15,"Provincia":"Coruña, A","CODAUTO":12},{"CPRO":27,"Provincia":"Lugo","CODAUTO":12},{"CPRO":32,"Provincia":"Ourense","CODAUTO":12},{"CPRO":36,"Provincia":"Pontevedra","CODAUTO":12}, //FIN GALICIA
    {"CPRO":28,"Provincia":"Madrid","CODAUTO":13}, //FIN MADRID
    {"CPRO":30,"Provincia":"Murcia","CODAUTO":14}, //FIN MURCIA
    {"CPRO":31,"Provincia":"Navarra","CODAUTO":15}, //FIN NAVARRA
    {"CPRO":01,"Provincia":"Araba/Álava","CODAUTO":16},{"CPRO":48,"Provincia":"Bizkaia","CODAUTO":16},{"CPRO":20,"Provincia":"Gipuzkoa","CODAUTO":16}, //FIN PAIS VASCO
    {"CPRO":26,"Provincia":"Rioja, La","CODAUTO":17}, //FIN RIOJA
    {"CPRO":51,"Provincia":"Ceuta","CODAUTO":18},{"CPRO":52,"Provincia":"Melilla","CODAUTO":19}];
    const codigoComunidad = sacarCódigoComunidad(Comunidad); //contiene el codigo de la comunidad que hemos seleccionado en el input de comunidad autonoma
    selectProvincia.innerHTML = "<option>"+"</option>"; //Reiniciamos los select cada vez que haga el evento change


     for (let i = 0; i < arrayProvincias.length; i++) { //Mostramos las provincias de la comunidad seleccionada
         if (arrayProvincias[i].CODAUTO === codigoComunidad) {
            selectProvincia.innerHTML = selectProvincia.innerHTML+"<option>"+arrayProvincias[i].Provincia+"</option>";  //  
         }
     }
    console.log("Saliendo en la funcion cargarProvincia");
}

/**
 * *Saca el codigo de la comunidad que hemos seleccionado.
 * @param {Array} arrayComunidad Guarda todas las comunidades.
 * @returns Devuelve el codigo de la comunidad que hemos seleccionado.
 */
function sacarCódigoComunidad(arrayComunidad) {
    console.log("Entrando en la funcion sacarCódigoComunidad()")
    var codigoComunidad = 0;
    const selectComunidad = document.getElementById("comuAutonoma");
    const seleccion = selectComunidad.value;
    for (let i = 0; i < arrayComunidad.length; i++) {
        if (arrayComunidad[i].Literal == seleccion) {
            codigoComunidad = arrayComunidad[i].Código;
        }
    }
    console.log("Saliendo de la funcion sacarCódigoComunidad()")
    return codigoComunidad;
}

/**
 * Ejercicio 5 & 6
 */

formularioRegistro();
/**
 * *Cada vez que entremos al formulario vamos a recoger el input de la pagina web del formulario, cuando salga del foco del input hará el evento.
 * *Cada vez que entremos también cojeremos todos los inputs del formulario y llamaremos a la funcion recorrerInputs.
 */
function formularioRegistro() {
    if (recogerSlug()=="registro") {
        const webValid = document.getElementById("PaginaWeb");
        webValid.addEventListener("blur",comprobarWeb,false);
        const inputs = document.querySelectorAll("input");
        recorrerInputs(inputs)
        // const Formulario = document.getElementById("formulario2");
        // Formulario.addEventListener('submit',validacionesFormulario,false);
    }
}

/**
 * *Con esta función recorreremos todos los inputs y el que haya salido del focus hará el evento, donde llamaremos a la funcion validInputs, que le pasaremos por parametro el input que ha salido del focus
 * @param {Array} arrayInputs contiene todos los inputs
 */
function recorrerInputs(arrayInputs) {
    for (let i = 0; i < arrayInputs.length; i++) {
        arrayInputs[i].addEventListener("blur",function () {
                validInputs(arrayInputs[i])
        },false);
    }
}

/**
 * *Si el valor del input está vacio introduciremos en el span el texto, y pondremos el borde de color rojo, si no es del formato, quitaremos el warning y le añadiremos al valor que haya en el input el http://.
 */
function comprobarWeb() {
    console.log("Entrando en comprobarWeb()")
    var web = document.getElementById("PaginaWeb").value;
    const warningWeb = document.getElementById("warningWeb");
    if (web == false) {
        warningWeb.className="warning";
        warningWeb.textContent = "Ingresa una página web por favor, RECUERDA: ingresar http:";
        console.log("Saliendo de la funcion comprobarWeb()")
    }else if(!validWeb(web)){
        warningWeb.className="warningSolucionado";
        warningWeb.textContent = "";
        document.getElementById("PaginaWeb").value = "http://"+web;
        console.log("Saliendo de la funcion comprobarWeb()")
    }
    /**
     * 
     * @param {string} web contiene el valor del input
     * @returns devuelve true | false si el valor del input pasa la validación o no.
     */
    function validWeb(web) {
        console.log("Entrando en validWeb()")
        const validacion = /^(http|https).*$/
        console.log("Saliendo de la funcion validWeb()")
        return validacion.test(web)
    }
}
/**
 * *En esta función estaremos validando todos los inputs del formulario del registro.html.
 * @param {object} e es el objeto input que hemos pasado por parametro en la funcion de arriba.
 */
function validInputs(e) {
    console.log("Entrando en la funcion de validInputs")
    const input = e;
    const warningNombre = document.getElementById("warningNombre");
    const warningApellidos = document.getElementById("warningApellidos");
    const warningFecha = document.getElementById("warningMenor");
    const warningEmail = document.getElementById("warningEmail");
    const warningUser = document.getElementById("warningUser");
    const warningContrasena = document.getElementById("warningContrasena");
    const warningConfirmContrasena = document.getElementById("warningRepetirContrasena");
    const warningComunidad = document.getElementById("warningComunidad");

    /**
     * Hago este primer if, para que cada vez que entre con diferentes inputs no haga todas las validacines, con este if las restrinjo a que solo haga las validaciones con las que el id sea igual.
     */
    if (input.id == "nombre") {
        if (input.value == false) {
            input.className ="noValido";
            warningNombre.className="warning";
            warningNombre.textContent = "El nombre no puede estar vacio, rellena el campo por favor";
        }else{
            resetarWarning(warningNombre);
        }
    }
    if (input.id=="apellidos") {
        if (input.value == false) {
            input.className ="noValido";
            warningApellidos.className="warning";
            warningApellidos.textContent = "El apellido no puede estar vacio, rellena el campo por favor";
            console.log("Saliendo de la funcion de validInputs")
        }else{
            resetarWarning(warningApellidos);
            console.log("Saliendo de la funcion de validInputs")
        }
    }

    if (input.id == "fechaNacimiento") {
        if (!validAño(input.value) || !validMes(input.value) || !validDia(input.value)) {
            input.className ="noValido";
            warningFecha.className="warning";
            warningFecha.textContent = "Eres menor de edad, las personas con menos de 18 años no pueden registrarse en nuestra web";
            console.log("Saliendo de la funcion de validInputs")
         }else{
            resetarWarning(warningFecha);
            console.log("Saliendo de la funcion de validInputs")
         }
    }

    if (input.id=="e-mail") {
        if (input.value == false) {
            input.className ="noValido";
            warningEmail.className="warning";
            warningEmail.textContent = "El email no puede estar vacío, por favor rellena el campo";
            console.log("Saliendo de la funcion de validInputs")
        }else{
            resetarWarning(warningEmail);
            console.log("Saliendo de la funcion de validInputs")
        }
    }

    if (input.id=="usuario") {
        if (input.value == false) {
            input.className ="noValido";
            warningUser.className="warning";
            warningUser.textContent = "El usuario no puede estar vacío, por favor rellena el campo";
        }else{
            resetarWarning(warningUser);
            console.log("Saliendo de la funcion de validInputs")
        }
    }

    if (input.id=="contrasena") {
        if (!isValidContrasena(input.value)) {
            input.className ="noValido";
            warningContrasena.className="warning";
            warningContrasena.textContent = "Has introducido mal la contraseña, La contraseña tenga mínimo 6 carácteres, una letra en mayúscula, un número, y un carácter que no sea ni letras ni números.";
            console.log("Saliendo de la funcion de validInputs")
        }else{
            resetarWarning(warningContrasena);
            console.log("Saliendo de la funcion de validInputs")
        }
    }

    if (input.id=="ConfirmContrasena") {
        const contrasenaIgual = document.getElementById("contrasena").value;
        if (!isValidContrasena(input.value)) {
            input.className ="noValido";
            warningConfirmContrasena.className="warning";
            warningConfirmContrasena.textContent = "Has introducido mal la contraseña, La contraseña tenga mínimo 6 carácteres, una letra en mayúscula, un número, y un carácter que no sea ni letras ni números.";
            console.log("Saliendo de la funcion de validInputs")
        }else{
            resetarWarning(warningConfirmContrasena);
            console.log("Saliendo de la funcion de validInputs")
        }

        if (input.value != contrasenaIgual) {
            input.className ="noValido";
            warningConfirmContrasena.className="warning";
            warningConfirmContrasena.textContent = "Las contrasena no son iguales, revisa de nuevo por favor";
            console.log("Saliendo de la funcion de validInputs")
        }else{
            resetarWarning(warningConfirmContrasena);
            console.log("Saliendo de la funcion de validInputs")
        }
    }

    if (input.id=="comuAutonoma") {
        if (input.value == false) {
            input.className ="noValido";
            warningComunidad.className="warning";
            warningComunidad.textContent = "La comunidad no puede estar vacío, por favor rellena el campo";
            console.log("Saliendo de la funcion de validInputs")
        }else{
            resetarWarning(warningComunidad);
            console.log("Saliendo de la funcion de validInputs")
        }
    }
    /**
     * Para no duplicar codigo en resetar los warnings, he creado esta función para todos.
     * Si es valido, se cambia del color rojo al color negro representando que esta dentro de la validacion y se elimina el texto del warning
     * @param {object} warning guarda el span que vamos a modificar
     */

    function resetarWarning(warning) {
        console.log("Entrando en la funcion resetarwarning")
        input.className ="valido";
        warning.className="warningSolucionado";
        warning.textContent = "";
        console.log("Saliendo en la funcion resetarwarning")
    }

    /**
     * 
     * @param {string} contrasena contiene la contraseña del input
     * @returns devuelve true|false si está bien formado o no.
     */
    function isValidContrasena(contrasena) {
        console.log("Entrando en la funcion isValidContrasena")
        const validacion = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_@#$%&]).{6,}$/
        console.log("Saliendo de la funcion isValidContrasena")
        return validacion.test(contrasena);
    }
    /**
     * Si es mas de 18 años la diferencia devolverá true.
     * @param {date} fechaNaci contiene la fecha de nacimiento.
     * @returns devuelve true|false si la diferencia de años es menor o mayo a 18
     */
    function validAño(fechaNaci) {
        console.log("Entrando en la funcion validAño")
        const fechaNacimientoAUX = new Date(fechaNaci)
        const fechaActual = new Date();
        if (fechaActual.getFullYear() - fechaNacimientoAUX.getFullYear() >= 18)  {
            console.log("Saliendo de la funcion validAño")
            return true;
        }
     }

     /**
      * *Si hay una diferencia de mas de 1 mes devolvera false
      * @param {date} fechaNaci contiene la fecha de nacimiento.
      * @returns devuelve la diferencia de mes
      */
     function validMes(fechaNaci) {
        console.log("Entrando en la funcion validMes")
        const fechaNacimientoAUX = new Date(fechaNaci)
        const fechaActual = new Date();
        console.log("Saliendo de la funcion validMes")
        return ((fechaActual.getMonth() - fechaNacimientoAUX.getMonth()) < 0 ) ? false : true; 
     }
     /**
      * @param {date} fechaNaci contiene la fecha de nacimiento.
      * @returns devuelve la diferencia de dia
      */
     function validDia(fechaNaci) {
        console.log("Entrando en la funcion validDia")
        const fechaNacimientoAUX = new Date(fechaNaci)
        const fechaActual = new Date();
        console.log("Saliendo de la funcion validDia")
        return ((fechaActual.getDate() - fechaNacimientoAUX.getDate()) < 0 ) ? false : true; 
     }
}