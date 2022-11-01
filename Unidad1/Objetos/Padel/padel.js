var  numeroSocio = 1;
const arraySocios = [];
/**
 * @class Creamos la clase socio con los getters and setters
 */
class socio{
    constructor(DNI,nombre,apellidos,fecha_nacimiento,localidad){
        this._numeroSocio = numeroSocio++;
        this._DNI = DNI;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fecha_nacimiento = fecha_nacimiento;
        this._localidad = localidad;
    }

    get getDNI(){
        return this._DNI;
    }

    get getnumeroSocio(){
        return this._numeroSocio;
    }
    get getnombre(){
        return this._nombre;
    }
    get getApellidos(){
        return this._apellidos;
    }
    get getFechaNacimiento(){
        return this._fecha_nacimiento;
    }
    get getLocalidad(){
        return this._localidad;
    }

    set setLocalidad(localidad){
        this._localidad = localidad;
    }
    /**
     * @Method Tenemos el metodo mostrarInformacion() que nos servirá para mostrar por consola toda la información
     */

    mostrarInformacion(){
        console.log("El socio con DNI: "+ this.getDNI + ", Nombre: "+this.getnombre+", apellidos: "+this.getApellidos+", fechaNacimiento: "+this.getFechaNacimiento+ ", residencia en : "+this.getLocalidad + ", su categoria es: "+averiguarCategoría(this.getFechaNacimiento));
    }
    /**
     * 
     * @Method En este metodo lo que estamos haciendo es, buscar en el array el socio que tenga el mismo dni que pasamos por parametro
     */ 
    static buscarSocioDNI(DNI){
        for (let i = 0; i < arraySocios.length; i++) {
            if (DNI === arraySocios[i].getDNI) {
                arraySocios[i].mostrarInformacion()
            }
        }
    }
    /**
     * @Method En este metodo lo que estamos haciendo es, buscar en el array el socio que tenga la misma localidad que pasamos por parametro
     */
    static buscarLocalidad(localidad){
        for (let i = 0; i < arraySocios.length; i++) {
            if (localidad === arraySocios[i].getLocalidad) {
                arraySocios[i].mostrarInformacion()
            }
        }
    }
    /**
     * @Method En este metodo lo que estamos haciendo es, buscar en el array el socio que tenga el mimso nombre y apellido que pasamos por parametro
     */
    static buscarSocioNombreApellidos(nombre,apellidos){
        for (let i = 0; i < arraySocios.length; i++) {
            if ((nombre === arraySocios[i].getnombre) && (apellidos === arraySocios[i].getApellidos)) {
                arraySocios[i].mostrarInformacion()
            }
        }
    }
    /**
     * @Method En este metodo lo que estamos haciendo es, buscar en el array el socio que tenga la misma categoria que pasamos por parametro
     */

    static filtrarCategorias(categoria){
        for (let i = 0; i < arraySocios.length; i++) {
            let fecha = arraySocios[i].getFechaNacimiento;
            if (categoria == averiguarCategoría(fecha)) {
                arraySocios[i].mostrarInformacion();
            }
            
        }
    }
    /**
    * @Method En este metodo lo que estamos haciendo es, añadir al socio en el arraySocios que tenemos arriba
    */
    altaSocio(){
        arraySocios.push(this)
    }
    /**
    * @Method En este metodo lo que estamos haciendo es, recorrer el arraySocios para posteriormente mostrar esa informacion con el metodo mostrarInformacion()
    */
    static mostrarArraySocios(){
        for (let i = 0; i < arraySocios.length; i++) {
            arraySocios[i].mostrarInformacion()
        }
    }
    /**
    * @Method En este metodo lo que estamos haciendo es, recorrer el arraySocios para posteriormente si introduce el dni o el numero de socio lo eliminaremos del arraySocios
    */
    static bajaSocio(cadena){
        for (let i = 0; i < arraySocios.length; i++) {
            if ((Number(cadena) === arraySocios[i].getnumeroSocio) || (cadena === arraySocios[i].getDNI)) {
                arraySocios.splice(i,1)
            }
        }
    }
}
/**
 * @function averiguarCategoría() Esta funcion estamos recibiendo por parametro la fecha nacimiento, restaremos el año de nacimiento y dependiendo de los años de diferencia  será su categoría.
 * 
 */
function averiguarCategoría(fecha){
    let fechaActual = new Date();
    let anoNacimiento = new Date(fecha);
    let diferencia = fechaActual.getFullYear() - anoNacimiento.getFullYear();

    if(diferencia==8 || diferencia == 9){
        return "Benjamin";
    }else if(diferencia == 10 || diferencia == 11){
        return "Alevin";
    }else if(diferencia == 12 || diferencia == 13){
        return "Infantil";
    }else if(diferencia == 14 || diferencia == 15){
        return "Cadete";
    }else if(diferencia == 16 || diferencia == 17 || diferencia == 18){
        return "Juvenil"
    }else if( diferencia >= 19){
        return "Senior"
    }else{
        return "Sin categoria"
    }
}
/*************************************************************************************************************************************************************************************************************** */

let socio1 = new socio("29535449E","Juan Luis","Hernandez Terron","2001/08/20","Bormujos");
let socio2 = new socio("29535449F","Pedro","Juan Gomez","2001/08/20","Nueva Sevilla");
socio1.altaSocio();
socio2.altaSocio();
console.log("***")
socio.mostrarArraySocios();
console.log("***")
socio.bajaSocio("29535449E");
socio.mostrarArraySocios();
console.log("***")
socio.filtrarCategorias("Senior")
console.log("***")
socio.buscarLocalidad("Nueva Sevilla")



