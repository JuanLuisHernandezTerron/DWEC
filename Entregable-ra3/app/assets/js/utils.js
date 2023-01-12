/**********************EJERCICIO-1**********************************/
function ejercicio1() {
  let slug = prompt("Dime la url de la pagina actual");
  console.log(slug_correcto(slug))
}

/**
  * *Esta funcion iguala la variable host y el slug que pasamos por parametros, si es igual devolvera true, en caso contrario false.
  * @param  {String} slug Guarda la url que introduce el usuario.
  * @param  {String} host Guarda en una cadena el slug de la web en la que estamos acualmente.
  * @param  {boolean} url Devuelve true o false.
  */
 
 function slug_correcto(url) {
   console.log("Entrando en la funcion slug_correcto")
   let host = window.location.pathname;
   let resultado = (host === url) ? true : false;
   console.log("Saliendo de la funcion slug_correcto con valor a devolver esperado: "+resultado)
   return (host === url) ? true : false; 
}

/**********************EJERCICIO-2**********************************/
function ejercicio2() {
   let identificacion = prompt("Envia tu identificacion");
   console.log(validarIdentificacion(identificacion))
}
/**
* *Tenemos dos arrays donde guardamos los caracteres que se utiliza independientemente, aunque nie utuliza el array letrasNIE y letrasDNI por su formato, posteriormente validamos si está bien formados el identificador, y si es correcto
* *seguimos con el proceso, si está validado procederemos a ver si está bien formado el dni/nie, si el resto de cada identificador es correcto con el valor de la posicion del array devuelve true si no false.
* @param {string} identificacion Contiene la identificacion que ha introducido el usuario
* @returns La funcion devuelve true/false dependiendo si está bien formado la identificacion y si también es correcto el dni/nie
*/
function validarIdentificacion(identificacion) {
   console.log("Entrando en la funcion validarIdentificacion()")
   let letrasDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
   let letrasNIE = ["X","Y","Z"];
   let validacionDNI = /^\d{8}[A-Z]$/
   let validacionNIE = /^[X,Z,Y]\d{7}[A-Z]$/
   var restoDNI = 0;
   var restoNIE = 0;
   if(validacionDNI.test(identificacion)){
      return validarDNI(identificacion)
   }else if(validacionNIE.test(identificacion)){
      return validarNIE(identificacion)
   }else{
      alert("Lo has introducido mal")
      console.log("Saliendo en la funcion validarIdentificacion()")
   }

   function validarDNI(identificacion) {
      console.log("Entrando en la funcion validarDNI()")
      const numero =  identificacion.substring(0,identificacion.length - 1); //Guardamos en una constante los 8 digitos del numero de un DNI
      const letra = identificacion.substring(identificacion.length-1,identificacion.length); //Guarda la letra del dni que posteriormente la igualaremos para saber si es correcta.
      restoDNI = numero % 23;
      let resultado = (letrasDNI[restoDNI] === letra) ? true : false;
      console.log("Saliendo de la funcion validarDNI(), con valor esperado: "+resultado)
      return (letrasDNI[restoDNI] === letra) ? true : false;
   }

   function validarNIE(identificacion) {
      console.log("Entrando en la funcion validarNIE()")
      const letra1 = identificacion.substring(0,1); //Guarda la primera letra del NIE, que la utilizaremos para cuando recorramos el array de letrasNIE, nos devuelva la posicion que ocupa en el array.
      const letraFinal = identificacion.substring(identificacion.length-1,identificacion.length) // Guardamos la letra final del NIE, que la utilizaremos para cuando recorramos el array de letrasDNI , para ver si coinciden
      const numero = identificacion.substring(1,identificacion.length-1); // Guarda los 7 digitos(numeros) del NIE
      const numeroFinal = letrasNIE.indexOf(letra1)+numero;//Guarda la posicion de la letra del NIE, que está en el array letrasNIE y se la añadimos a la cadena que tiene guardad los 7 digitos del NIE
      restoNIE = numeroFinal % 23;
      let resultado = (letrasDNI[restoNIE] === letraFinal) ? true : false;
      console.log("Saliendo de la funcion validarNIE(), con valor esperado: "+resultado)
      return (letrasDNI[restoNIE] === letraFinal) ? true : false;
   }
}
/**********************EJERCICIO-3**********************************/
function ejercicio3() {
   let cadena1 = prompt("Dime la primera cadena")
   let cadena2 = prompt("Dime la segunda cadena")
   analizarCadenas(cadena1,cadena2)
}

 /**
 * *Simplemente esta función si las 2 cadenas son iguales devuelve sus respectivos alerts
 * @param {String} cadena1 Contiene la primera cadena que a ingresado el usuario
 * @param {String} cadena2 Contiene la segunda cadena que a ingresado el usuario 
 */

  function analizarCadenas(cadena1,cadena2) {
   console.log("Entrando en la funcion analizarCadenas()")
   var cadenaAUX1 = cadena1.toLowerCase().replaceAll(" ","");
   var cadenaAUX2 = cadena2.toLowerCase().replaceAll(" ","");
   cadenaAUX1 = simplificarCadena(cadena1);
   cadenaAUX2 = simplificarCadena(cadena2);
   (cadenaAUX1 === cadenaAUX2) ? alert("Las frases son iguales") : alert("Las frases no coinciden");
   console.log("Saliendo en la funcion analizarCadenas()");
}
/**
 * *Tenemos 2 arrays que contienen las tildes y los caracteres especiales mas utilizados, primero recorreremos el objeto de las tildes,
 * *si el caracter de la cadena es igual a la key del objeto, entrará dentro del if, y será reemplazao por el valor de la key el caracter de la cadena
 * *, en el segundo for, recorreremos la cadena y a la vez el array de caracter especiales, si son iguales los caracteres será borrado de la cadena.
 * @param {String} cadena contiene la cadena del usuario ingresado
 * @returns Devuelve la cadena final sin espacios que hayan podido quedar sueltos.
 */
function simplificarCadena(cadena) {
   console.log("Entrando en la funcion simplificarCadena()")
   const mapaTildes = {"á":"a","é":"e","ó":"o","í":"i","ú":"u","ü":"u"};
   const arrayCaracteresESP = ["&","<",">","'",'"',"©","©","€","°","²","³","/","º","@","µ","¼","½","¾","π","%","$","#","?","¿","="]
   for (let i = 0; i < cadena.length; i++) {
      for (let j = 0; j < Object.keys(mapaTildes).length; j++) {
         if(cadena.charAt(i) === Object.keys(mapaTildes)[j]){
            cadena = cadena.replaceAll(cadena.charAt(i),mapaTildes[cadena.charAt(i)]).toLowerCase();
         }
      }
   }

    for (let i = 0; i < cadena.length; i++) {
       for (let j = 0; j < arrayCaracteresESP.length; j++) {
            if (cadena.charAt(i) === arrayCaracteresESP[j]) {
               cadena = cadena.replaceAll(cadena.charAt(i),"").toLowerCase();
            }
         }
      }
   console.log("Saliendo de la función simplificarCadena(), con valor esperado:"+cadena.replaceAll(" ",""))
   return cadena.replaceAll(" ","");
}

/**********************EJERCICIO-4**********************************/

function ejercicio4() {
   handleSubmit();
}
   /**
    * *Con la funcion hadleSubmit estaremos validando tanto el usuario como la contraseña introducida por el usuario
    */
    const form = document.getElementById("formulario");
    const usuario = document.getElementById("nombre");
    const contrasena = document.getElementById("contraseña");
    const checkbox1 = document.getElementById("check");
 
    function handleSubmit(e) {
      console.log("Entrando en la funcion handleSubmit()")
       const usuarioNombre = usuario.value;
       const usuarioContrasena = contrasena.value;
       const es_Valido = new Boolean(true);
 
       if(usuarioNombre === false || isValidNombre(usuarioNombre) === false){
          alert("Has introcido mal el nombre")
          es_Valido = false;
       }
 
       if (usuarioContrasena === false || isValidContrasena(usuarioContrasena) === false) {
          alert("Has introcido mal la contraseña")
          es_Valido = false;
       }
 
       if(es_Valido){
          setCookie(checkbox1);
       }else if (es_Valido && checkbox1.checked){
          setCookie(checkbox1);
       }
       /**
        * *La funcion setCookie(), estará agregando cookies a la web, dependiendo si esta pinchado el checkbox el keepsessionopen estará inicialiado en true o false 
        * @param {Boolean} checkbox Devuelve true o false si está pinchada.
        */
 
       function setCookie(checkbox) {
          const dia = new Date();
          const expires = new Date()
          expires.setTime(expires.getTime() + 1*24*60*60*1000);
          document.cookie = "keepsessionopen"+"="+checkbox.checked +";"+ "Expires" + "=" + expires.toUTCString();
          document.cookie = "Fecha Y hora Actual"+"="+dia+";"+"Expires"+"="+expires.toUTCString();
       }
 
       function isValidNombre(nombre) {
          const validacion = /^[a-z0-9-]{3,}$/;
          return validacion.test(nombre);
       }
    
       function isValidContrasena(contrasena) {
          const validacion = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_@#$%&]).{6,}$/
          return validacion.test(contrasena);
       }
       console.log("Saliendo de la funcion handleSubmit()")
       form.addEventListener('submit',handleSubmit);
    }

    /**
     * *La funcion analizarCookie, primero guardaremos en un array las cookies, posteriormente lo recorreremos y cuando llegue a la clave keepsessionopen
     * *, la guardaremos el valor (true o false) en una variable, segundo, si keepsessionopen es false, recorreremos de nuevo el array, y cuando
     * *encuentre la clave "Fecha Y hora Actual" guardaremos en una variable la fecha en la que se inició la última sesión, para finalizar guardaremos en una
     * *variable la diferencia de minutos que hay entre las fechas.
     */
    function analizarCookie() {
      console.log("Entrando en la funcion analizarCookie()")
       const cname = "keepsessionopen";
       let name = cname + "=";
       var keepFalse = new Boolean(true);
       let array = document.cookie.split(";");
          for (let i = 0; i < array.length; i++) {
             var c = array[i];
                while (c.charAt(0) === " ") {
                   c = c.substring(1);
                }
                if (c.indexOf(name)=== 0) {
                   keepFalse = c.substring(cname.length+1, c.length);
                }
          }
          if (keepFalse == "false") {
             const cnameAUX = "Fecha Y hora Actual";
             let nameAUX = cnameAUX + "=";
             var fechaActual = new Date();
             for (let i = 0; i < array.length; i++) {
                var c = array[i];
                   while (c.charAt(0) === " ") {
                      c = c.substring(1);
                   }
                   if (c.indexOf(nameAUX)=== 0) {
                   var fechaCookieAUX = c.substring(nameAUX.length, c.length);
                   }
             }
          var fechaCookie = new Date(fechaCookieAUX);
          let diferenciaTiempo = parseInt((fechaActual.getTime() - fechaCookie.getTime())/1000/60);
          (diferenciaTiempo >=5) ? alert("Session Expired") : alert("Open session");
          console.log("Saliendo en la funcion analizarCookie()")
       }
    }

/**********************EJERCICIO-5**********************************/

function ejercicio5() {
   const contrasena1 = document.getElementById("contrasena").value;
   const contrasena2 = document.getElementById("ConfirmContrasena").value;
   const fechaNacimiento = document.getElementById("fechaNacimiento").value;
   (contrasena1 === contrasena2) ? alert("Las contraseñas son iguales") : alert("Las contraseñas no son iguales");
   confirmar18Anos(fechaNacimiento);
}

/**
* *Primero vamos a ver si la diferencia que hay de años entre la fecha actual y la fecha de nacimiento, posteriormente si los meses es menor o igual a 0 (Si es el mismo mes o ya ha pasado ese mes(devuelve numero negativo))
* *y para finalizar si hay mas de 1 día de diferencia es mayor de edad, con todo globalmente. 
* @param {*} fechaNaci 
*/
function confirmar18Anos(fechaNaci) {
   console.log("Entrando en la función confirmar18Anos()");
   const fechaNacimientoAUX = new Date(fechaNaci)
   const fechaActual = new Date();
   if (fechaActual.getFullYear() - fechaNacimientoAUX.getFullYear() >= 18)  {
      if((fechaActual.getMonth() - fechaNacimientoAUX.getMonth()) <= 0 ){
         if ((fechaActual.getDate() - fechaNacimientoAUX.getDate()) > 0) {
            alert("ERES MAYOR DE EDAD")
            console.log("Saliendo en la función confirmar18Anos(), con el valor esperado: ERES MAYOR DE EDAD");
         }else{
            alert("ERES MENOR")
            console.log("Saliendo en la función confirmar18Anos(), con el valor esperado: ERES MENOR");
         }
      }else{
         alert("ERES MENOR")
         console.log("Saliendo en la función confirmar18Anos(), con el valor esperado: ERES MENOR");
      }
   }else{
      alert("ERES MENOR")
      console.log("Saliendo en la función confirmar18Anos(), con el valor esperado: ERES MENOR");
   }
}

/**********************EJERCICIO-6**********************************/

function ejercicio6() {
   let fecha1 = prompt("Dime una fecha Ex:(yyyy-mm-dd)")
   diferenciaDias(fecha1);
}

/**
* *Primero guardamos en una variable la fecha actual y en otra la fecha que ha introducido el usuario en formato Date
* *Calculamos la diferencia en milisegundos, que posteriormente la utilizaremos para ver la diferencia real que hay (dias,horas,minutos,segundos),
* *primero que todo en todas las diferencia, parseamos a Entero y posteriormente utilizamos la funcion Math.abs para que me devuelva el entero,
* * es decir, que el numero negativo pase a positivo, y por último hacemos la diferencia
* @param {*} fechaInicio Guarda la fecha introducida por el usuario
*/
   function diferenciaDias(fechaIni) {
   console.log("Entrando en la funcion diferenciaDias()")
   const fechaActual = new Date();
   const fechaInicio = new Date(fechaIni);
   const diferenciaMilisgundos = fechaInicio - fechaActual;
   const diferenciaDias = parseInt(Math.abs(diferenciaMilisgundos/(1000*60*60*24)));
   const diferenciaHoras = parseInt(Math.abs(diferenciaMilisgundos/(1000*60*60)))-(24*diferenciaDias);
   const diferenciaMinutos = parseInt(Math.abs(diferenciaMilisgundos/(1000*60)))-(60*diferenciaHoras)-(24*60*diferenciaDias);
   const diferenciaSegundos = parseInt(Math.abs(diferenciaMilisgundos/1000)) - (diferenciaHoras*60*60)-(diferenciaMinutos*60)-(diferenciaDias*24*60*60);
   alert("Quedan "+diferenciaDias+" Dias"+"\n"+diferenciaHoras +" Horas"+"\n"+diferenciaMinutos + " Minutos"+"\n"+diferenciaSegundos +" Segundos")
   console.log("Saliendo de la funcion diferenciaDias(),con resultado previsto:"+"Quedan "+diferenciaDias+" Dias"+"\n"+diferenciaHoras +" Horas"+"\n"+diferenciaMinutos + " Minutos"+"\n"+diferenciaSegundos +" Segundos")
   }

/**********************EJERCICIO-7**********************************/

function ejercicio7() {
   let fecha = prompt("Dime la fecha Ex:(yyyy-mm-dd)");
   convertidorMes(fecha);
}

/**
* *Guardamos en una variable date, la fecha
* *Posteriormente guardamos el mes, y creamos un objeto de meses
* @param {*} fecha Guarda el valor de la fecha que ha introducido el usuario
*/

function convertidorMes(fecha) {
   console.log("Entrando en la funcion convertidorMes()")
   const fechaAUX = new Date(fecha);
   const mes = fechaAUX.getMonth()+1;
   let mesObject = {1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"}
   console.log("Saliendo de la funcion convertidorMes(), con valor esperado: "+fechaAUX.getDate()+ " "+mesObject[mes]+" "+fechaAUX.getFullYear())
   alert(fechaAUX.getDate()+ " "+mesObject[mes]+" "+fechaAUX.getFullYear())
}

/**********************EJERCICIO-8**********************************/

function ejercicio8() {
   imprimirDatos()
}
/**
* *La funcion nos crea una nueva ventana donde vamos a guardar la informacion del html padre en un variable y la mostraremos en el body de la ventana window
*/
function imprimirDatos(){
   console.log("Entrando en la funcion imprimirDatos()")
   miventana=window.open('','','_blank , toolbar = 0,url = 0,width =400,height = 500')
   const elementos = document.getElementById("contenido").innerHTML;
   miventana.document.write("<html><body><div>")
   miventana.document.write(elementos)
   miventana.document.write("</div></body></html>")
   miventana.print()
   console.log("Saliendo en la funcion imprimirDatos()")
}

/**********************EJERCICIO-9**********************************/

function ejercicio9() {
   crearRunning()
}

/**
* *Tenemos un constructor donde creamos un objeto Runner, y tenemos un método donde devuelve el tiempo que ha tardado en terminar la maraton
* El método calcularTiempo(), devuelve, si la hora inicio o la hora fin no tienen valor, devuelve un contador a 0, tanto como horas,minutos y segundos,
* si tiene valores, devolverá una cadena con el tiempo que ha tardado en finalizar la maraton
*/
   
class Runner{
   constructor(nombre,apellidos,evento,fecha,dorsal,horaInicio,horaFin){
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._evento = evento;
      this._fecha = new Date(fecha);
      this._dorsal = dorsal;
      this._horaInicio = new Date(horaInicio);
      this._horaFin = new Date(horaFin);
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

   calcularTiempo(){
      console.log("Entrando en el metodo calcularTiempo()")
         if (this.getHoraInicio === false || this.getHoraFin === false) {
            console.log("Saliendo del metodo calcularTiempo(), con valor esperado:"+"00:00:00")
            return "00:00:00";
         }else{
            const diferencia = parseInt(Math.abs((this.getHoraInicio - this.getHoraFin)));
            const diferenciaHora = parseInt(Math.abs(diferencia/(1000*60*60)));
            const diferenciaMinutos = parseInt(Math.abs(diferencia/(1000*60))) - (60*diferenciaHora);
            const diferenciaSegundos = parseInt(Math.abs(diferencia/1000)) - (diferenciaHora*60*60) - (diferenciaMinutos*60);
            console.log("Saliendo del metodo calcularTiempo(), con valor esperado: "+diferenciaHora + ":" + diferenciaMinutos + ":" + diferenciaSegundos)
            return "Has tardado en acabar la maraton en: "+diferenciaHora + ":" + diferenciaMinutos + ":" + diferenciaSegundos;
         }
      }
   }   
   function crearRunning() {
      let runner = new Runner("Juan Luis","Hernandez Terron","Running Alixar","08-11-2022","16","08-11-2022 17:30:20","08-11-2022 20:25:10");      
      alert(runner.calcularTiempo())
   }

/**********************EJERCICIO-10**********************************/

function ejercicio10() {
   let runner = prompt("Dime el dorsal del runner");
   ordenarMarcador(runner);
}

/**
 * Estaremos Ordenando el array de Runner´s, dependiendo de su marca estará en un posicion del array o otra
 * @param {string} runner Cadena que contiene el dorsal del runner  
 */
function ordenarMarcador(runner) {
   console.log("Entrando en la funcion ordenarMarcador()")
   var arrayMarcador = [];
   let runner1 = new Runner("Jose Luis","Perez Perejon","Running Alixar","09-11-2022","20","09-11-2022 10:35:20","09-11-2022 14:40:30");
   let runner2 = new Runner("Andres","Jimenez Clarke","Running Alixar","10-11-2022","18","10-10-2022 18:10:50","10-10-2022 22:11:24");
   let runner3 = new Runner("Manuel","José Perez","Running Alixar","08-11-2022","21","08-11-2022 17:30:20","08-11-2022 21:10:10");
   let runner4 = new Runner("Antonio","Camilo Pajarez","Running Alixar","08-11-2022","25","08-11-2022 17:30:20","08-11-2022 23:01:40");
   arrayMarcador.push(runner1)
   arrayMarcador.push(runner2)
   arrayMarcador.push(runner3)
   arrayMarcador.push(runner4)
   arrayMarcador.sort(compare)
   console.log(arrayMarcador)
   alert(sacarPosicion())
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
    * @returns devuelve la posicion del runner dentro del array ya ordenado po su marca
    */
   function sacarPosicion() {
      console.log("Entrando en la funcion sacarPosicion()")
      for (let i = 0; i < arrayMarcador.length; i++) {
         if (arrayMarcador[i].getDorsal === runner) {
            console.log("Saliendo de la funcion sacarPosicion(), con valor previsto:"+"El runner "+runner+ " se encuentra en la posición "+(i+1))
            return "El runner "+runner+ " se encuentra en la posición "+(i+1) //Devuelvo una posicion para que se vea mejor, si "Manuel" por ejemplo está en la posicion 0 del array (es el que ha tardado menos), he puesto que tenga una posicion para que
                                                                              //cuando haga el return se vea que está en la posicion 1, así igual con todos, posicion 2,3,4. 
         }
      }
   }
}