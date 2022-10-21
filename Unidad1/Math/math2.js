// Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

// El valor del radio.
// El valor del diámetro.
// El valor del perímetro de la circunferencia.
// El valor del área del círculo.
// El valor del área de la esfera.
// El valor del volumen de la esfera.
// El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente. Debes escribir al lado si son cm, o cm2, o cm3. Como datos de muestra, si metes 5, deberías obtener aproximadamente:
// 5 / 10 / 31,41 /78,54 / 314,15 / 523,59.

const prompt=require("prompt-sync")({sigint:true});

var radio = prompt("Dime el valor del radio");

var diametro = radio*2;
var perimetro = Math.PI *radio * 2;
var areaCirculo = Math.PI * radio * radio;
var areaEsfera = 4 * Math.PI * Math.pow(radio,2);
var volumenEsfera = 4/3 * Math.PI * Math.pow(radio,3);
console.log(radio+"cm"+" / "+diametro+"cm"+" / "+perimetro+"cm"+" / "+areaCirculo+"cm2"+" / "+areaEsfera+"cm2"+" / "+volumenEsfera + "cm3")




