const form = document.createElement('form');
const fieldset = document.createElement('fieldset');
const legend = document.createElement('legend');
const selectAUX = creacionSelect();


/**
 * Cuando carga la página carga tambien el formulario
 */
window.addEventListener("load",()=>{
    document.body.appendChild(form);
    contorno(form,legend);
    cuerpoFormulario()
})
/**
 * *Crea el contorno del formulario.
 * @param {node} form contiene el formulario
 * @param {node} legend contiene el legend
 */
function contorno(form,legend) {
    form.appendChild(fieldset);
    fieldset.appendChild(legend)
    legend.textContent = "Formulario";
}
/**
 * Creo el formulario completo con sus funciones que corresponden
 */
function cuerpoFormulario() {
    fieldset.appendChild(creacionLabel("Nombre del disco","Nombre-Disco"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionInput("text"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionLabel("Grupo de musica o cantante","grupoMusica"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionInput("text"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionLabel("Año Publicacion","AnoPubli"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionInput("date"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionLabel("Tipo Musica","tipMusic"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(selectAUX)
    fieldset.appendChild(creacionbr());
    selectAUX.appendChild(creacionOption("Rock","Rock"))
    selectAUX.appendChild(creacionOption("Pop","Pop"))
    selectAUX.appendChild(creacionOption("Punk","Punk"))
    selectAUX.appendChild(creacionOption("Indie","Indie"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionLabel("Localizacion","locali"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionInput("number"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionLabel("Prestado","prest"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionInput("checkbox"))
    fieldset.appendChild(creacionbr());
    fieldset.appendChild(creacionInputAUX("button","Enviar"))
}
/**
 * *Creo el nodo, le introduzco un valor y su atributo correspondiente
 * @param {*} atributo contiene el valor del atributo
 * @param {*} valor contiene el valor de la etiqueta (nodo)
 * @returns devuelve el nodo option
 */
function creacionOption(atributo,valor) {
    const option = document.createElement("option");
    option.textContent = valor
    option.setAttribute("value",atributo);
    return option
}

function creacionSelect() {
    const select = document.createElement("select");
    return select
}

function creacionbr() {
    const br = document.createElement("br");
    return br
}

/**
 * *Creo el nodo, le introduzco un valor y su atributo correspondiente
 * @param {*} texto contiene el valor de la etiqueta (nodo)
 * @param {*} textoFor contiene el valor del atributo for
 * @returns devuelvo el nodo label
 */

function creacionLabel(texto,textoFor) {
    const label = document.createElement('label');
    label.textContent = texto;
    label.setAttribute("for",textoFor);
    return label;
}
 /**
  * *Creo el nodo, le introduzco un valor y su atributo correspondiente
  * @param {*} tipo contiene el tipo de que es el nodo, en este caso es un input
  * @returns devuelvo el nodo input
  */
function creacionInput(tipo) {
    const input = document.createElement('input');
    input.setAttribute("type",tipo)
    return input
}
/**
 * *Creo el nodo, le introduzco un valor y su atributo correspondiente
 * @param {*} tipo 
 * @param {*} valor 
 * @returns devuelvo el input con mas de un atributo
 */
function creacionInputAUX(tipo,valor) {
    const input = document.createElement('input');
    input.setAttribute("type",tipo)
    input.setAttribute("value",valor)
    return input
}