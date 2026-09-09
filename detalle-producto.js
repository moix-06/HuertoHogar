const productos = {
    manzanas: {
        nombre: "Manzanas Fuji",
        precio: 1200,
        imagen: "imagenes/manzana.jpg",
        descripcion: "Manzanas Fuji frescas y naturales, ideales para disfrutar en cualquier momento del día."
    },
    naranjas: {
        nombre: "Naranjas Valencia",
        precio: 1000,
        imagen: "imagenes/naranja.png",
        descripcion: "Naranjas Valencia frescas y jugosas, perfectas para consumir directamente o preparar jugos."
    },
    platanos: {
        nombre: "Platanos Cavendish",
        precio: 800,
        imagen: "imagenes/platano.png",
        descripcion: "Plátanos Cavendish frescos y naturales, ideales para acompañar desayunos y colaciones."
    },
    zanahorias: {
        nombre: "Zanahorias Organicas",
        precio: 900,
        imagen: "imagenes/zanahoria.png",
        descripcion: "Zanahorias orgánicas frescas, ideales para ensaladas, comidas y preparaciones saludables."
    },
    espinacas: {
        nombre: "Espinacas Frescas",
        precio: 700,
        imagen: "imagenes/espinaca.jpg",
        descripcion: "Espinacas frescas, perfectas para ensaladas, tortillas y diferentes preparaciones."
    },
    pimientos: {
        nombre: "Pimientos Tricolores",
        precio: 1500,
        imagen: "imagenes/pimientos.jpg",
        descripcion: "Pimientos tricolores frescos, ideales para ensaladas, guisos y diferentes recetas."
    },
    miel: {
        nombre: "Miel Organica",
        precio: 5000,
        imagen: "imagenes/miel.png",
        descripcion: "Miel orgánica natural, presentada en un práctico frasco de 500 gramos."
    },
    quinoa: {
        nombre: "Quinua Organica",
        precio: 3200,
        imagen: "imagenes/quinoa.png",
        descripcion: "Quinua orgánica de excelente calidad, ideal para acompañar diferentes comidas."
    },
    leche: {
        nombre: "Leche Entera",
        precio: 1200,
        imagen: "imagenes/leche.png",
        descripcion: "Leche entera fresca, ideal para desayunos, preparaciones y consumo diario."
    }
};

    const parametros = new URLSearchParams(window.location.search);
    const idProducto = parametros.get("id");
    const producto = productos[idProducto];

    if (producto) {
        document.getElementById("imagen-producto").src = producto.imagen;
        document.getElementById("imagen-producto").alt = producto.nombre;
        document.getElementById("nombre-producto").textContent = producto.nombre;
        document.getElementById("descripcion-producto").textContent = producto.descripcion;
        document.getElementById("precio-producto").textContent =
        "$" + producto.precio.toLocaleString("es-CL") + " / unidad";
    } else {
    document.getElementById("nombre-producto").textContent = "Producto no encontrado";
    document.getElementById("descripcion-producto").textContent =
        "No se pudo encontrar el producto seleccionado.";
    document.getElementById("precio-producto").textContent = "";
    }

    const botonAgregar = document.getElementById("agregar-detalle");

    botonAgregar.addEventListener("click", function () {
    if (!producto) {
        return;
    }

    const cantidad = Number(document.getElementById("cantidad-producto").value);

    if (cantidad < 1) {
        alert("La cantidad debe ser mayor a 0.");
        return;
    }

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    for (let i = 0; i < cantidad; i++) {
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito.");
});