    const botonesCarrito = document.querySelectorAll(".btn-carrito");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");

    let carrito = [];

    botonesCarrito.forEach(function (boton) {
    boton.addEventListener("click", function () {

        const producto = boton.closest(".producto");

        const nombre = producto.dataset.nombre;
        const precio = Number(producto.dataset.precio);
        const cantidad = Number(producto.querySelector(".cantidad").value);

        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        });

        mostrarCarrito();
    });
});

    function mostrarCarrito() {

    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach(function (producto, indice) {

        const elemento = document.createElement("div");

        elemento.innerHTML = `
            <span>
                ${producto.nombre} x${producto.cantidad} -
                $${producto.precio * producto.cantidad}
            </span>

            <button type="button" onclick="eliminarProducto(${indice})">
                Eliminar
            </button>
        `;

        listaCarrito.appendChild(elemento);

        total += producto.precio * producto.cantidad;
    });

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
    }

    totalCarrito.textContent = "Total: $" + total;
}

    function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
}