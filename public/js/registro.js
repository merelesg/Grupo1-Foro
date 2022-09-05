const nombre = document.getElementById("Nombre")
const email = document.getElementById("Mail")
const password = document.getElementById("Contraseña")
const User = document.getElementById("Usuario")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "alert"
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <6){
        warnings += 'el nombre no es valido <br>'
    }
    console.log(data)

}})