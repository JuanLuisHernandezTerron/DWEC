const inputTexto = document.getElementById("textInput")
const inputPassword = document.getElementById("password")
const textArea = document.getElementById("textArea")
const label = document.getElementById("label");
const imagen = document.getElementById("imagen");
const checkbox = document.getElementById("checkbox");
const radio = document.getElementById("radio");
const boton = document.getElementById("boton");
const div = document.createElement("div");
document.body.appendChild(div);
const br = document.createElement("br");

inputTexto.addEventListener("click",() =>{
    const input = document.createElement("input")
    input.setAttribute("name",prompt("Dime el nombre que tendrá su atributo name"))
    div.appendChild(input)
    div.appendChild(creacionbr())
})

inputPassword.addEventListener("click",() =>{
    const input = document.createElement("input")
    input.setAttribute("name",prompt("Dime el nombre que tendrá su atributo name"))
    input.setAttribute("type","password")
    div.appendChild(input)
    div.appendChild(creacionbr())
})

textArea.addEventListener("click",()=>{
    const textArea = document.createElement("textarea");
    textArea.setAttribute("name",prompt("Dime el nombre que tendrá su atributo name"))
    textArea.setAttribute("column",40);
    textArea.setAttribute("row",5);
    div.appendChild(textArea)
    div.appendChild(creacionbr())
})

label.addEventListener("click",()=>{
    const label = document.createElement("label");
    label.setAttribute("for",prompt("Dime el nombre que tendrá su atributo name"))
    label.textContent = prompt("Que valor quieres que tenga la etiqueta");
    div.appendChild(label);
    div.appendChild(creacionbr());
})

imagen.addEventListener("click",()=>{
    const img = document.createElement("img");
    img.setAttribute("src",prompt("Dime la ruta de la imagen por favor"))
    div.appendChild(img);
    div.appendChild(creacionbr());
})

checkbox.addEventListener("click",()=>{
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.textContent = prompt("Que valor quieres que tenga la etiqueta");
    input.setAttribute("type", "checkbox");
    div.appendChild(label);
    div.appendChild(creacionbr());
    div.appendChild(input);
    div.appendChild(creacionbr());
})

radio.addEventListener("click",()=>{
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.textContent = prompt("Que valor quieres que tenga la etiqueta");
    input.setAttribute("type", "radio");
    div.appendChild(label);
    div.appendChild(creacionbr());
    div.appendChild(input);
    div.appendChild(creacionbr());
})

boton.addEventListener("click",()=>{
    const input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", prompt("Que valor quieres que tenga la etiqueta"));
    div.appendChild(input);
    div.appendChild(creacionbr());
})

function creacionbr() {
    const br = document.createElement("br");
    return br
}
