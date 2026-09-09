let productos = JSON.parse(localStorage.getItem("productos")) || [];

const formulario = document.getElementById("form-producto");
const listaProductos = document.getElementById("lista-productos");

function mostrarProductos() {
    listaProductos.innerHTML = "";

    productos.forEach(function(producto, indice) {
        const fila = document.createElement("tr");

        let estadoStock = "";

        if (producto.stock <= producto.stockCritico) {
            estadoStock = " ⚠️ Stock crítico";
        }

        fila.innerHTML = `
            <td>${producto.codigo}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio.toLocaleString("es-CL")}</td>
            <td>${producto.stock}${estadoStock}</td>
            <td>
                <button type="button" onclick="editarProducto(${indice})">
                    Editar
                </button>

                <button type="button" onclick="eliminarProducto(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        listaProductos.appendChild(fila);
    });
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const codigo = document.getElementById("codigo").value.trim();
    const nombre = document.getElementById("nombre-producto-admin").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = Number(document.getElementById("precio").value);
    const stock = Number(document.getElementById("stock").value);
    const stockCritico = Number(document.getElementById("stock-critico").value);
    const categoria = document.getElementById("categoria").value.trim();
    const imagen = document.getElementById("imagen").value.trim();

    if (codigo === "") {
        alert("El código del producto es obligatorio.");
        return;
    }

    if (codigo.length < 3) {
        alert("El código debe tener al menos 3 caracteres.");
        return;
    }

    if (nombre === "") {
        alert("El nombre del producto es obligatorio.");
        return;
    }

    if (nombre.length > 100) {
        alert("El nombre no puede superar los 100 caracteres.");
        return;
    }

    if (descripcion.length > 500) {
        alert("La descripción no puede superar los 500 caracteres.");
        return;
    }

    if (isNaN(precio) || precio < 0) {
        alert("El precio debe ser un número mayor o igual a 0.");
        return;
    }

    if (!Number.isInteger(stock) || stock < 0) {
        alert("El stock debe ser un número entero mayor o igual a 0.");
        return;
    }

    if (!Number.isInteger(stockCritico) || stockCritico < 0) {
        alert("El stock crítico debe ser un número entero mayor o igual a 0.");
        return;
    }

    if (categoria === "") {
        alert("La categoría es obligatoria.");
        return;
    }

    if (imagen !== "" && !/\.(jpg|jpeg|png|gif|webp)$/i.test(imagen)) {
        alert("La imagen debe tener formato JPG, JPEG, PNG, GIF o WEBP.");
        return;
    }

    const producto = {
        codigo: codigo,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        stock: stock,
        stockCritico: stockCritico,
        categoria: categoria,
        imagen: imagen
    };

    productos.push(producto);

    localStorage.setItem("productos", JSON.stringify(productos));

    formulario.reset();

    mostrarProductos();

    alert("Producto guardado correctamente.");
});

function eliminarProducto(indice) {
    productos.splice(indice, 1);

    localStorage.setItem("productos", JSON.stringify(productos));

    mostrarProductos();
}

function editarProducto(indice) {
    const producto = productos[indice];

    document.getElementById("codigo").value = producto.codigo;
    document.getElementById("nombre-producto-admin").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("stock").value = producto.stock;
    document.getElementById("stock-critico").value = producto.stockCritico;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("imagen").value = producto.imagen;

    productos.splice(indice, 1);

    localStorage.setItem("productos", JSON.stringify(productos));

    mostrarProductos();
}

mostrarProductos();

function eliminarProducto(indice) {
    productos.splice(indice, 1);

    localStorage.setItem("productos", JSON.stringify(productos));

    mostrarProductos();
}

function editarProducto(indice) {
    const producto = productos[indice];

    document.getElementById("codigo").value = producto.codigo;
    document.getElementById("nombre-producto-admin").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("stock").value = producto.stock;
    document.getElementById("stock-critico").value = producto.stockCritico;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("imagen").value = producto.imagen;

    productos.splice(indice, 1);

    localStorage.setItem("productos", JSON.stringify(productos));

    mostrarProductos();
}

mostrarProductos();