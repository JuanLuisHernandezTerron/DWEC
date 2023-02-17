window.addEventListener("load",()=>{
    main()
})

function main() {
    cargarOption();
}

function cargarOption() {
    console.log("Entro en cargar")
    const select = document.getElementById("comunidad");
    fetch('latest.json',{
        method:"GET",
        header:{
            "Content-Type": "application/json"
        },
    })
    .then((response)=>{
        if (response.ok) {
            return response.json();
        }
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error =>{console.log(error)}))
}