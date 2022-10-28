
if(confirm("Quieres abrir una ventana nueva?")){
    miVentana = window.open('','','_blank, toolbar = 0, location = 0, menubar = 0, resizable = 0 width = 200, height = 80')
    miVentana.moveTo(500,500);
    miVentana.document.write("Este es un pequeño texto")
    miVentana.document.write("<button onclick='javascript:window.close()'>CerrarVentana</button>");

}else{
    alert("Operacion de abrir ventana cancelada");
}

function scrollArriba() {
    window.scroll(0,0);
}

function scrollArribaSuperio10px() {
    window.scroll(0,10);
}

function agrandarVentana400x200() {
    miVentana.resizeBy(400,200);
}

function agrandarVentana() {
    miVentana.resizeBy(10,10);
}

function moverAbajoDerecha() {
    miVentana.resizeTo(10,10);
}

function moverPantallaPosi100(){
    miVentana.moveTo(100,100);
}

function cerrarventana(){
    debugger
    if(miVentana.closed){
        alert("Ya está cerrada")
    }else{
        miVentana.close();
    }
}