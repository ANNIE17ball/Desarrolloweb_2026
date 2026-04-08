function resaltar(elemento) {
    elemento.style.backgroundColor = "#dff0ff";
}
function normal(elemento) {
    elemento.style.backgroundColor = "white";
}

function validarFormulario(formulario) {
    let correo = formulario.correo.value;

    if (correo === "") {
        document.getElementById("mensaje").textContent =
            "El correo no puede estar vacío";
        return false;
    }

    document.getElementById("mensaje").textContent =
        "Formulario enviado correctamente";
    return true;
}