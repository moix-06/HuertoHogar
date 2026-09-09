HuertoHogar

Descripción

HuertoHogar es un proyecto web académico desarrollado para la asignatura
DSY1104 - Desarrollo Fullstack II.

El proyecto consiste en una tienda online orientada a la venta de
productos frescos, orgánicos y lácteos. El sitio permite navegar entre
distintas secciones, visualizar productos, consultar detalles,
registrarse, enviar consultas y utilizar un carrito de compras.

Objetivo

Desarrollar una página web utilizando HTML5, CSS3 y JavaScript,
aplicando estructura semántica, estilos propios, validación de
formularios, interacción con el usuario y almacenamiento de información
mediante localStorage.

Funcionalidades

Página principal de HuertoHogar.

Menú de navegación entre las diferentes vistas.

Sección de productos.

Clasificación de productos por categorías.

Imágenes de los productos.

Detalle individual de los productos.

Selección de cantidad antes de agregar un producto al carrito.

Carrito de compras.

Cálculo automático del total.

Eliminación de productos del carrito.

Persistencia del carrito mediante localStorage.

Página Nosotros.

Página de Blog.

Dos artículos con vistas de detalle.

Página de Contacto.

Validación del formulario de contacto mediante JavaScript.

Formulario de registro de usuarios.

Validación de datos del registro mediante JavaScript.

Validación de correo electrónico según los dominios solicitados.

Validación de contraseña.

Validación de RUN.

Validación de región y comuna.

Mensajes personalizados para errores de los formularios.

Uso de autocomplete en campos de formularios.

Video relacionado con HuertoHogar.

Tecnologías utilizadas

HTML5

Se utiliza para construir la estructura de las páginas y organizar el
contenido mediante elementos semánticos como header, nav, main,
section, article y footer.

CSS3

Se utiliza para el diseño visual del sitio, incluyendo distribución de
elementos, botones, formularios, productos, carrito y estilos generales.

JavaScript

Se utiliza para agregar interacción y lógica al sitio. Entre sus
funciones se encuentran la validación de formularios, manejo del
carrito, selección de cantidades, cálculo de totales, carga dinámica del
detalle de productos y uso de localStorage.

Git y GitHub

Se utilizan para controlar las versiones del proyecto y mantener el
código del proyecto en un repositorio remoto.

Estructura del proyecto

HuertoHogar/
│
├── imagenes/
│   ├── espinaca.jpg
│   ├── leche.png
│   ├── manzana.jpg
│   ├── miel.png
│   ├── naranja.png
│   ├── pimientos.jpg
│   ├── platano.png
│   ├── quinoa.png
│   └── zanahoria.png
│
├── videos/
│   └── huertohogar.mp4
│
├── blog.html
├── blog-frutas.html
├── carrito.js
├── contacto.html
├── contacto.js
├── detalle-producto.html
├── detalle-producto.js
├── index.html
├── nosotros.html
├── producto.html
├── registro.html
├── style.css
├── validacion.js
└── README.md

Descripción de las páginas

index.html

Corresponde a la página principal del sitio. Presenta HuertoHogar,
información general, misión, visión y un video relacionado con el
proyecto.

producto.html

Muestra los productos disponibles organizados por categorías. Permite
seleccionar cantidades, agregar productos al carrito y acceder al
detalle de cada producto.

detalle-producto.html

Muestra la información del producto seleccionado. Los datos se cargan de
forma dinámica mediante detalle-producto.js utilizando el
identificador recibido en la URL.

registro.html

Contiene el formulario de registro de usuarios. Los datos ingresados son
validados mediante JavaScript antes de completar el proceso.

nosotros.html

Presenta información general sobre HuertoHogar, incluyendo su misión,
visión y datos de contacto.

blog.html

Muestra artículos relacionados con alimentación y productos naturales,
incluyendo una descripción breve y acceso a sus detalles.

blog-frutas.html

Contiene el detalle de un artículo relacionado con los beneficios de
consumir frutas frescas.

contacto.html

Permite al usuario ingresar su nombre, correo electrónico y mensaje para
enviar una consulta.

Archivos JavaScript

carrito.js

Controla el funcionamiento del carrito de compras. Permite:

Agregar productos.

Seleccionar cantidades.

Calcular el total.

Mostrar los productos agregados.

Eliminar productos.

Guardar el carrito en localStorage.

Recuperar el carrito almacenado al volver a cargar la página.

detalle-producto.js

Contiene la información de los productos y permite cargar dinámicamente
el nombre, precio, imagen y descripción según el producto seleccionado.

También permite agregar el producto seleccionado al carrito utilizando
la cantidad indicada por el usuario.

validacion.js

Contiene las validaciones relacionadas con los formularios de registro y
la lógica de validación de inicio de sesión.

contacto.js

Valida los datos ingresados en el formulario de contacto, incluyendo
nombre, correo electrónico y mensaje.

Validaciones

El proyecto utiliza JavaScript para validar los formularios antes de
continuar.

Entre las validaciones implementadas se encuentran:

Campos obligatorios.

Longitud máxima del nombre.

Formato y dominios permitidos para el correo.

Longitud de la contraseña.

Formato del RUN.

Selección de región.

Selección de comuna.

Longitud máxima del mensaje de contacto.

Los errores se muestran directamente en el formulario mediante mensajes
personalizados.

Carrito y localStorage

El carrito utiliza localStorage para mantener los productos agregados
aunque el usuario cambie de página o recargue el navegador.

Los productos se almacenan en formato JSON bajo la clave:

carrito

Cada producto almacenado contiene información como:

nombre
precio
cantidad

El total se calcula considerando el precio y la cantidad seleccionada.

Organización del desarrollo

El proyecto está organizado separando:

Estructura y contenido en archivos HTML.

Diseño visual en style.css.

Validaciones en archivos JavaScript.

Funcionalidad del carrito en carrito.js.

Lógica del detalle de productos en detalle-producto.js.

Validación del formulario de contacto en contacto.js.

Recursos multimedia en las carpetas imagenes y videos.

Proyecto académico

Asignatura: DSY1104 - Desarrollo Fullstack II

Proyecto: HuertoHogar

Tipo: Proyecto académico de desarrollo web Frontend