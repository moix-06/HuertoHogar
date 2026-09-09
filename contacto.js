    const formularioContacto = document.getElementById("form-contacto");

    formularioContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre-contacto").value.trim();
    const correo = document.getElementById("correo-contacto").value.trim();
    const comentario = document.getElementById("comentario-contacto").value.trim();

    const errorNombre = document.getElementById("error-nombre-contacto");
    const errorCorreo = document.getElementById("error-correo-contacto");
    const errorComentario = document.getElementById("error-comentario-contacto");

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorComentario.textContent = "";

    let formularioValido = true;

    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        formularioValido = false;
    } else if (nombre.length > 100) {
        errorNombre.textContent = "El nombre no puede superar los 100 caracteres.";
        formularioValido = false;
    }

    const correoValido = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    if (correo === "") {
        errorCorreo.textContent = "El correo es obligatorio.";
        formularioValido = false;
    } else if (correo.length > 100) {
        errorCorreo.textContent = "El correo no puede superar los 100 caracteres.";
        formularioValido = false;
    } else if (!correoValido.test(correo)) {
        errorCorreo.textContent = "Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        formularioValido = false;
    }

    if (comentario === "") {
        errorComentario.textContent = "El mensaje es obligatorio.";
        formularioValido = false;
    } else if (comentario.length > 500) {
        errorComentario.textContent = "El mensaje no puede superar los 500 caracteres.";
        formularioValido = false;
    }

    if (formularioValido) {
        alert("Mensaje enviado correctamente.");
        formularioContacto.reset();
    }
});