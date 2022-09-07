const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")
const reppass = document.getElementById("rep-password")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    if (!regexEmail.test(email.value)) {
        warnings += "El correo no es valido <br>"
        entrar = true
    }
    if (password.value.length <8) {
        warnings += "La contraseña debe tener más de 8 carácteres <br>"
        entrar = true
    }
    if (password.value != reppass.value) {
        warnings += "Las contraseñas deben ser iguales <br>"
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado"
    }

})