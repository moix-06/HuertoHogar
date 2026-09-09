    const formulario = document.getElementById("form-registro");
    console.log(formulario);

    formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    document.getElementById("error-nombre").textContent = "";

    if (nombre.trim() === "") {
        document.getElementById("error-nombre").textContent =
            "Por favor ingresa tu nombre completo.";
        return;
    }

    const correo = document.getElementById("correo").value.trim();
    const correoValido = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

    document.getElementById("error-correo").textContent = "";

    if (!correoValido.test(correo)) {
        document.getElementById("error-correo").textContent =
            "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com";
        return;
    }


    const clave = document.getElementById("clave").value;

    document.getElementById("error-clave").textContent = "";

    if (clave.length < 4 || clave.length > 10) {
        document.getElementById("error-clave").textContent =
            "La clave debe tener entre 4 y 10 caracteres";
        return;
    }

    const run = document.getElementById("run").value.trim();
    const runValido = /^[0-9]{7,8}[0-9kK]$/;

    document.getElementById("error-run").textContent = "";

    if (!runValido.test(run)) {
        document.getElementById("error-run").textContent =
            "El RUN debe ir sin puntos ni guion, ejemplo: 19011022K";
        return;
    }
    const fecha = document.getElementById("fecha-nacimiento").value;

    document.getElementById("error-fecha").textContent = "";

    if (fecha === "") {
        document.getElementById("error-fecha").textContent =
            "Por favor ingresa tu fecha de nacimiento.";
        return;
    }

    const apellidos = document.getElementById("apellidos").value.trim();

    document.getElementById("error-apellidos").textContent = "";

    if (apellidos === "") {
        document.getElementById("error-apellidos").textContent =
            "Por favor ingresa tus apellidos.";
        return;
    }

    const direccion = document.getElementById("direccion").value.trim();

    document.getElementById("error-direccion").textContent = "";

    if (direccion === "") {
        document.getElementById("error-direccion").textContent =
            "Por favor ingresa tu dirección.";
        return;
    }

    console.log("Todos los campos son validos. El formulario se puede enviar.");
    const region = document.getElementById("region").value;

    document.getElementById("error-region").textContent = "";

    if (region === "") {
        document.getElementById("error-region").textContent =
            "Por favor selecciona tu región.";
        return;
    }

    const comuna = document.getElementById("comuna").value;

    document.getElementById("error-comuna").textContent = "";

    if (comuna === "") {
        document.getElementById("error-comuna").textContent =
            "Por favor selecciona tu comuna.";
        return;
    }

    console.log("Todos los campos son validos. El formulario se puede enviar.");

});

    const formularioLogin = document.getElementById("form-login");

    formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const loginCorreo = document.getElementById("login-correo").value.trim();
    const correoValido = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

    if (!correoValido.test(loginCorreo)) {
    alert("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com");
    return;
     }

     const loginClave = document.getElementById("login-clave").value;

     if (loginClave.length < 4 || loginClave.length > 10) {
        alert("La clave debe tener entre 4 y 10 caracteres");
        return;
         }

        alert("Inicio de sesión válido");
        window.location.href = "index.html";
     });

     
