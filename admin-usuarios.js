let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const formulario = document.getElementById("form-usuario");
const listaUsuarios = document.getElementById("lista-usuarios");

const regiones = {
    "Región Metropolitana": ["Santiago", "Maipú", "Puente Alto"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué"],
    "Biobío": ["Concepción", "Talcahuano", "Los Ángeles"],
    "La Araucanía": ["Temuco", "Villarrica", "Angol"]
};

const region = document.getElementById("region");
const comuna = document.getElementById("comuna");

Object.keys(regiones).forEach(function(nombreRegion) {
    const opcion = document.createElement("option");
    opcion.value = nombreRegion;
    opcion.textContent = nombreRegion;
    region.appendChild(opcion);
});

region.addEventListener("change", function() {
    comuna.innerHTML = '<option value="">Seleccionar comuna</option>';

    const comunas = regiones[region.value] || [];

    comunas.forEach(function(nombreComuna) {
        const opcion = document.createElement("option");
        opcion.value = nombreComuna;
        opcion.textContent = nombreComuna;
        comuna.appendChild(opcion);
    });
});

function mostrarUsuarios() {
    listaUsuarios.innerHTML = "";

    usuarios.forEach(function(usuario, indice) {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.run}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.tipo}</td>
            <td>${usuario.region}</td>
            <td>${usuario.comuna}</td>
            <td>
                <button type="button" onclick="editarUsuario(${indice})">
                    Editar
                </button>

                <button type="button" onclick="eliminarUsuario(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        listaUsuarios.appendChild(fila);
    });
}

function validarRUN(run) {
    run = run.replace(/\./g, "").replace(/-/g, "").toUpperCase();

    if (!/^\d{7,8}[0-9K]$/.test(run)) {
        return false;
    }

    const cuerpo = run.slice(0, -1);
    const dv = run.slice(-1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += Number(cuerpo[i]) * multiplicador;

        multiplicador++;

        if (multiplicador > 7) {
            multiplicador = 2;
        }
    }

    const resto = 11 - (suma % 11);

    let dvCalculado;

    if (resto === 11) {
        dvCalculado = "0";
    } else if (resto === 10) {
        dvCalculado = "K";
    } else {
        dvCalculado = String(resto);
    }

    return dv === dvCalculado;
}

function validarCorreo(correo) {
    return correo.endsWith("@duoc.cl") ||
        correo.endsWith("@profesor.duoc.cl") ||
        correo.endsWith("@gmail.com");
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const run = document.getElementById("run").value.trim();
    const nombre = document.getElementById("nombre-usuario").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const correo = document.getElementById("correo-usuario").value.trim();
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    const tipo = document.getElementById("tipo-usuario").value;
    const regionSeleccionada = region.value;
    const comunaSeleccionada = comuna.value;
    const direccion = document.getElementById("direccion").value.trim();

    if (!validarRUN(run)) {
        alert("El RUN ingresado no es válido.");
        return;
    }

    if (nombre === "") {
        alert("El nombre es obligatorio.");
        return;
    }

    if (nombre.length > 50) {
        alert("El nombre no puede superar los 50 caracteres.");
        return;
    }

    if (apellidos === "") {
        alert("Los apellidos son obligatorios.");
        return;
    }

    if (apellidos.length > 100) {
        alert("Los apellidos no pueden superar los 100 caracteres.");
        return;
    }

    if (correo === "") {
        alert("El correo es obligatorio.");
        return;
    }

    if (correo.length > 100) {
        alert("El correo no puede superar los 100 caracteres.");
        return;
    }

    if (!validarCorreo(correo)) {
        alert("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com.");
        return;
    }

    if (tipo === "") {
        alert("Debes seleccionar un tipo de usuario.");
        return;
    }

    if (regionSeleccionada === "") {
        alert("Debes seleccionar una región.");
        return;
    }

    if (comunaSeleccionada === "") {
        alert("Debes seleccionar una comuna.");
        return;
    }

    if (direccion === "") {
        alert("La dirección es obligatoria.");
        return;
    }

    if (direccion.length > 300) {
        alert("La dirección no puede superar los 300 caracteres.");
        return;
    }

    const usuario = {
        run: run,
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        fechaNacimiento: fechaNacimiento,
        tipo: tipo,
        region: regionSeleccionada,
        comuna: comunaSeleccionada,
        direccion: direccion
    };

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    formulario.reset();

    comuna.innerHTML = '<option value="">Seleccionar comuna</option>';

    mostrarUsuarios();

    alert("Usuario guardado correctamente.");
});

function eliminarUsuario(indice) {
    usuarios.splice(indice, 1);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarUsuarios();
}

function editarUsuario(indice) {
    const usuario = usuarios[indice];

    document.getElementById("run").value = usuario.run;
    document.getElementById("nombre-usuario").value = usuario.nombre;
    document.getElementById("apellidos").value = usuario.apellidos;
    document.getElementById("correo-usuario").value = usuario.correo;
    document.getElementById("fecha-nacimiento").value = usuario.fechaNacimiento;
    document.getElementById("tipo-usuario").value = usuario.tipo;

    document.getElementById("region").value = usuario.region;

    region.dispatchEvent(new Event("change"));

    document.getElementById("comuna").value = usuario.comuna;
    document.getElementById("direccion").value = usuario.direccion;

    usuarios.splice(indice, 1);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarUsuarios();
}

mostrarUsuarios();