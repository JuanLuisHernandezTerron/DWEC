/**
 * @class La clase Medico tendrá como atributo el nombre , personas curadas y su hospital de destino, ponemos el "_Atributo" para que no nos de fallo, creamos los getters and setters y los dos metodos pedidos por el ejercicio
 */
class Medico{
    constructor(nombre,personasCuradas,hospitalDestino){
        this._nombre = nombre;
        this._personasCuradas = personasCuradas;
        this._hospitalDestino = hospitalDestino;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    set setPersonasCuradas(personasCuradas){
        this._personasCuradas = parseInt(personasCuradas);
    }

    set setHospitalDestino(hospitalDestino){
        this._hospitalDestino = hospitalDestino;
    }

    get getNombre(){
        return this._nombre;
    }

    get getpersonasCuradas(){
        return parseInt(this._personasCuradas);
    }

    get gethospitalDestino(){
        return this._hospitalDestino;
    }

    mostrarDatos(){
        console.log("El nombre del medico es "+this.getNombre+", tiene a "+this.getpersonasCuradas+" personas curadas y su hospital de destino es "+this.hospitalDestino);
    }

    curarPersonas(){
        this._personasCuradas +=1;
    }
}

/**
 * @class Creamos el medico cirujano con el super para utilizar el constructor de la clase que heredamos
 * @extends Medico heredamos la clase Medico.
 */

class MedicoCirujano extends Medico{
    constructor(nombre,personasCuradas,hospitalDestino,especialidad) { 
        super(nombre,personasCuradas,hospitalDestino)
        this._especialidad = especialidad;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    set setPersonasCuradas(personasCuradas){
        this._personasCuradas = parseInt(personasCuradas);
    }

    set setHospitalDestino(hospitalDestino){
        this._hospitalDestino = hospitalDestino;
    }

    get getNombre(){
        return this._nombre;
    }

    get getpersonasCuradas(){
        return parseInt(this._personasCuradas);
    }

    get gethospitalDestino(){
        return this._hospitalDestino;
    }
    get getEspecialidad(){
        return this._especialidad;
    }

    mostrarDatos(){
         console.log("El nombre del medico es "+this.getNombre+", tiene a "+this.getpersonasCuradas+" personas curadas , su hospital de destino es "+this.gethospitalDestino+" y su especialidad es "+this.getEspecialidad);
    }
}


let medico = new Medico("Jose",2,"San juan de dios");
console.log(medico)
medico.curarPersonas();
console.log(medico)
medico.mostrarDatos();

let medicoCiju1 = new MedicoCirujano("Maria",5,"JQuiron","Toracica");
medicoCiju1.mostrarDatos();

