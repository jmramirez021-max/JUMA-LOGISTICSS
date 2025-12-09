
/* ============================================================
   ACTIVIDAD 1: Cambiar el fondo del banner
=============================================================== */

const banner = document.getElementById("banner");
if (banner) {
    banner.classList.remove("bg-danger");
    banner.classList.add("bg-warning");
}

/* ============================================================
   ACTIVIDAD 2: Testimonios y párrafos
=============================================================== */

// Testimonios VIP
const testimoniosVip = document.getElementsByClassName("testimonio-vip");
for (let vip of testimoniosVip) {
    vip.classList.add("text-primary");
}

// Párrafos
const parrafos = document.getElementsByTagName("p");
for (let p of parrafos) {
    p.classList.add("text-danger");
}

/* ============================================================
   ACTIVIDAD 3: Query selectors
=============================================================== */

const primerInput = document.querySelector("input");
if (primerInput) {
    primerInput.classList.add("bg-success", "text-white");
}

// Botones
const botones = document.querySelectorAll("button");
botones.forEach(boton => boton.classList.add("btn-danger"));

// getElementsByName
const campoNombre = document.getElementsByName("nombreEjemplo");
if (campoNombre.length > 0) {
    campoNombre[0].classList.add("text-warning");
}

/* ============================================================
   EVENTO onclick
=============================================================== */
function saludar() {
    const mensaje = document.getElementById("mensajeOnclick");
    if (mensaje) mensaje.innerText = "¡Gracias por hacer clic!";
}

/* ============================================================
   EVENTO mouseover / mouseout
=============================================================== */
function cambiarColor() {
    const cuadro = document.getElementById("cuadroColor");
    if (cuadro) cuadro.style.background = "#ffd966";
}

function restaurarColor() {
    const cuadro = document.getElementById("cuadroColor");
    if (cuadro) cuadro.style.background = "#eee";
}

/* ============================================================
   EVENTO onchange
=============================================================== */
function mostrarSeleccionEjemplo() {
    const valor = document.getElementById("selectEjemplo").value;
    const texto = document.getElementById("textoOnchange");

    if (texto) {
        texto.innerText = valor ? "Elegiste el taller: " + valor : "";
    }
}

/* ============================================================
   EVENTO addEventListener
=============================================================== */

const btnCambiarCard = document.getElementById("btnCambiarCard");
if (btnCambiarCard) {
    btnCambiarCard.addEventListener("click", function () {
        const titulo = document.getElementById("cardTitulo");
        const texto = document.getElementById("cardTexto");
        const imagen = document.getElementById("cardImagen");

        if (titulo) titulo.innerText = "Nuevo Taller Actualizado con IA";
        if (texto) texto.innerText = "Este taller ahora incluye automatización con inteligencia artificial.";
        if (imagen) imagen.src = "img/casco.jpeg";
    });
}

/* ============================================================
   VALIDACIÓN DE FORMULARIO
=============================================================== */
function validarFormularioEjemplo() {
    const nombre = document.getElementById("nombreEjemplo").value;

    if (nombre.trim() === "") {
        alert("Por favor escribe tu nombre.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}

/* ============================================================
   GALERÍA: Agregar imágenes dinámicas
=============================================================== */

const inputImagen = document.getElementById("inputImagen");
const btnAgregarImagen = document.getElementById("btnAgregarImagen");
const galeria = document.getElementById("galeria");

if (btnAgregarImagen) {
    btnAgregarImagen.addEventListener("click", function () {
        const url = inputImagen.value.trim();

        if (url === "") {
            alert("Por favor ingresa una URL válida.");
            return;
        }

        const col = document.createElement("div");
        col.classList.add("col-md-4");

        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen agregada por el usuario";
        img.classList.add("img-fluid", "rounded", "shadow");

        col.appendChild(img);
        galeria.appendChild(col);
        inputImagen.value = "";
    });
}

/* ============================================================
   CARRITO: agregar y eliminar productos
=============================================================== */

let contador = 1;
const imagenes = [
    "https://i.imgur.com/1bX5QH6.jpeg",
    "https://i.imgur.com/Fw7Zq2e.jpeg",
    "https://i.imgur.com/XxWQb5h.jpeg",
    "https://i.imgur.com/nYcUzxj.jpeg"
];

function agregarProducto() {
    const carrito = document.getElementById("carrito");
    const mensaje = document.getElementById("mensaje");

    const item = document.createElement("li");
    item.classList.add("bg-success");

    const img = document.createElement("img");
    img.src = imagenes[(contador - 1) % imagenes.length];

    const texto = document.createElement("span");
    texto.textContent = "Producto " + contador++;

    item.appendChild(img);
    item.appendChild(texto);
    carrito.appendChild(item);

    mensaje.textContent = "Producto agregado";
    mensaje.className = "text-success fw-bold";

    setTimeout(() => mensaje.textContent = "", 1000);
}

function eliminarProducto() {
    const carrito = document.getElementById("carrito");
    const mensaje = document.getElementById("mensaje");

    if (carrito.lastChild) {
        carrito.removeChild(carrito.lastChild);
        mensaje.textContent = "Producto eliminado";
        mensaje.className = "text-danger fw-bold";
    } else {
        mensaje.textContent = "No hay productos para eliminar";
        mensaje.className = "text-warning fw-bold";
    }

    setTimeout(() => mensaje.textContent = "", 1000);
}
