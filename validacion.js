const formulario = document.getElementById('form-registro');

formulario.addEventListener('submit', function(event) {

event.preventDefault();
console.log('Formulario se envió, pero lo detuvimos');
});

const formulario = document.getElementById("form-registro");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        alert("Por favor ingresa tu nombre completo.");
        return;
    }

    console.log("El nombre está OK:", nombre);
});