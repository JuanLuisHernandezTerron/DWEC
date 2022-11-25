const $FORM = document.getElementById("formulario");
const $fechaCreacion = document.getElementById("fechaCreacion");
const $cocinero = document.getElementById("cocinero");
const $destinario = document.getElementById("destinario");
const $gramos = document.getElementById("gramos");
const $composicion = document.getElementById("composicion");
const $numeroCuenta = document.getElementById("iban");

function handleSubmit(e){
    e.preventDefault();
     const fechaCreacion = $fechaCreacion.value;
     const cocinero = $cocinero.value;
     const destinario = $destinario.value;
     const gramos = $gramos.value;
     const composicion = $composicion.value;
     const numeroCuenta = $numeroCuenta.value;
     var es_Validado = new Boolean(true);

     debugger

    if(fechaCreacion == false || isValidFechaCreacion(fechaCreacion) == false){
        alert("La fecha ha sido mal introdcidad")
        es_Validado = false;
    } 

    if(cocinero == false || isValidCocinero(cocinero)   == false){
        alert("El nombre del cocinero está mal escrito")
        es_Validado = false;
    }

    if(destinario == false || isValidDestino(destinario) == false){
        alert("El destino está mal escrito")
        es_Validado = false;
    }

    if(gramos == false || isValidGramos(gramos) == false){
        alert("Los gramos están mal escritos")
        es_Validado = false;
    }
       
    if(composicion == false || isValidComposicion(composicion) == false){
        alert("Los composicion están mal escritos")
        es_Validado = false;
    }

    if(numeroCuenta == false || isValidNumeroCuenta(numeroCuenta)== false){
        alert("La cuenta está mal escrito")
        es_Validado = false;
    }

    if(es_Validado == true){
        var NewBolsas = {fechaCreacionBolsa : fechaCreacion, cocineroBolsa : cocinero, destinarioBolsa : destinario, gramosBolsa : gramos, composicionBolsa: composicion, numeroCuenta: numeroCuenta};
        console.log(NewBolsas);
        var newbolsa = JSON.stringify(NewBolsas);
        console.log(newbolsa);
    }
}

function isValidNumeroCuenta(numeroCuenta) {

    let mapaVocabulario = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26};
    //Nos saca la sumas de las  2 letras
    let valorLetra1 = Number(mapaVocabulario[numeroCuenta.slice(0,1)]);
    let valorLetra2 = Number(mapaVocabulario[numeroCuenta.slice(1,2)]);
    
    var es_valido = Boolean(true);

    sumaLetras = valorLetra1 + valorLetra2;
    sumaLetras2 = Number(mapaVocabulario[numeroCuenta.slice(0,1)]) + Number(mapaVocabulario[numeroCuenta.slice(1,2)]);


    let suma3 = 0;
    let suma4 = 0;
    //Sacamos los 2 digitos finales
    let primerDigito = Number(numeroCuenta.slice(numeroCuenta.length-2 ,numeroCuenta.length-1));
    let segundoDigito = Number(numeroCuenta.slice(numeroCuenta.length-1 ,numeroCuenta.length));

    if (sumaLetras != sumaLetras2) {
        es_valido = false;
    }

    //Recorremos la numero cuenta para sacar los 12 numeros del iban
    let digitosIban1 = numeroCuenta.slice(5,11);    
    let digitosIban2 = numeroCuenta.slice(11,17);    
    
    //Guardamos la suma totdal de los 6 primeros digitos
    for (let index = 0; index < digitosIban1.length; index++) {
        suma3+= parseInt(digitosIban1.charAt(index));
    }

    //Guardamos la suma totdal de los 6 segundos digitos
    for (let index = 0; index < digitosIban2.length; index++) {
        suma4+= parseInt(digitosIban2.charAt(index));
    }

    //Redondeamos los valores para que no tengan decimales
    suma3 = Math.floor(suma3/6);
    suma4 = Math.floor(suma4/6);

   

    if(es_valido && primerDigito === suma3 && segundoDigito === suma4){
        const validacion = /^[A-Z]{2}\d{2}\-\d{12}\-\d{2}$/
        return validacion.test(numeroCuenta);
    }else{
        alert("Las sumas no corresponden bien")
    }
}

function isValidComposicion(composicion) {
    //guardamos la variable gramos en un auxiliar
    const gramos = $gramos.value;
    var gramosAUX = "";
    //Recorremos el string de la composicion hasta que encontremos la g de gramos, la estaremos guardando en otra variable auxiliar, cuando encuentre la g saldremos del bucle.
    //Opcion 1:
    // var aux = composicion.indexOf("g")
    // var aux2 = composicion.slice(0,aux);
    
    //Recorremos el string de la composicion hasta que encontremos la g de gramos, la estaremos guardando en otra variable auxiliar, cuando encuentre la g saldremos del bucle.
    //Opcion 2:
    for (let index = 0; index < composicion.length; index++) {      
        if (composicion.charAt(index) !== "g") {
            gramosAUX += composicion.charAt(index);
        }else{
            break;
        }
    }
    //Si son iguales los gramos, haremos la validacion
    if (Number(gramosAUX) === Number(gramos)) {
        const validacion = /^(\d+[g][a-zA-Z]{2}\d{1})$|^(\d+[g][a-zA-Z]\d)$|^(\d+[g][a-zA-Z]\d[a-zA-Z]{2}\d)$/;
        return validacion.test(composicion);
    }else{
        //Ponemos return false, ya que si  no ponemos nada devuelve true, y daría como valida la validacion cosa que no queremos
        return false;
    }
    
}

function isValidGramos(gramos){
    const validacion = /^([1-9]\d\d)$|^([1-4]\d{3})$|^5000$/;
    return validacion.test(gramos);
}

function isValidDestino(destinario){
    const validacion = /^[A-Z]{2,3}\_[a-z]+\:\d{4}$/;
    return validacion.test(destinario);
}


function isValidCocinero(cocinero){
    const validacion = /^[A-Z]{2}\W\d{4}$/;
    return validacion.test(cocinero);
}

function isValidFechaCreacion(fechaCreacion){
    const validacion =/^(([0][1-9])|(([1-2][0-9])|([3][0-1])))\-[0-12]{2}\-\d{4}$/;
    return validacion.test(fechaCreacion);
}

$FORM.addEventListener('submit',handleSubmit)