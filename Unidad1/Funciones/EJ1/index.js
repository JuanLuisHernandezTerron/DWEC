const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");


function IMC() {
    let IMC = parseFloat(peso.value/Math.pow(altura.value,2));
    alert("Su índice de masa corporal (IMC), es: "+ IMC);
}

function FMC() {
    let FMC = parseInt(220-edad.value);
    alert("Su Frecuencia Cardíaca Máxima (FMC), es:"+FMC);
}