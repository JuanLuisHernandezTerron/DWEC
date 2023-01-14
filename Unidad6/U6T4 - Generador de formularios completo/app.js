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
    div.appendChild(br)
})

inputPassword.addEventListener("click",() =>{
    const input = document.createElement("input")
    input.setAttribute("name",prompt("Dime el nombre que tendrá su atributo name"))
    input.setAttribute("type","password")
    div.appendChild(input)
    div.appendChild(br)
})