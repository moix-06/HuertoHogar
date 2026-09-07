const formulario = document.getElementById("form-registro");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        alert("Por favor ingresa tu nombre completo.");
        return;
    }

    const correo = document.getElementById("correo").value.trim();
    const correoValido = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

    if (!correoValido.test(correo)) {
        alert("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com");
        return;
    }

    const clave = document.getElementById("clave").value;

    if (clave.length < 4 || clave.length > 10) {
        alert("La clave debe tener entre 4 y 10 caracteres");
        return;
    }

    const run = document.getElementById("run").value.trim();
    const runValido = /^[0-9]{7,8}[0-9kK]$/;

    if (!runValido.test(run)) {
        alert("El RUN debe ir sin puntos ni guion, ejemplo: 19011022K");
        return;
    }

    const fecha = document.getElementById("fecha-nacimiento").value;

    if (fecha === "") {
        alert("Por favor ingresa tu fecha de nacimiento.");
        return;
    }

    const apellidos = document.getElementById("apellidos").value.trim();

    if (apellidos === "") {
        alert("Por favor ingresa tus apellidos.");
        return;
    }

    const direccion = document.getElementById("direccion").value.trim();

    if (direccion === "") {
        alert("Por favor ingresa tu direccion.");
        return;
    }

    console.log("Todos los campos son validos. El formulario se puede enviar.");
});

