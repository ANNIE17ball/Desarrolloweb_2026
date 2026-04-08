function borde(elemento) {
    elemento.style.border = "2px solid #c4dbb4";
    elemento.style.boxShadow = "5px 5px 5px #e1ecd6";
    elemento.style.borderRadius = "10px";
    elemento.style.padding = "5px";
}
function salir(elemento) {
    elemento.style.border = "2px solid #539fa2";
    elemento.style.boxShadow = "none";
}

function oka(formulario) {
    let nombre = formulario.name.value;
    let edad = formulario.age.value;

    if (nombre === "" || edad === "") {
        document.getElementById("mensaje").textContent =
            "Ninguno de los elementos de arriba deben de estar vacios";
        return false;
    }

    document.getElementById("mensaje").textContent =
        "Formulario enviado correctamente";
    return true;
}