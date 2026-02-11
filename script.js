// ================= MENU MOVIL =================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// ================= ANIMACIONES =================
const animatedElements = document.querySelectorAll(".animate, .testimony-card, .booking-form, .booking-image");

function showOnScroll() {
  animatedElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// ================= FORMULARIO =================
const form = document.getElementById("bookingForm");
const loader = document.querySelector(".loader");
const modal = document.getElementById("modal");
const whatsappBtn = document.getElementById("whatsappBtn");

let message = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  loader.style.display = "block";

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  message = `Hola, quiero agendar una cita:
Nombre: ${name}
Servicio: ${service}
Fecha: ${date}
Hora: ${time}`;

  setTimeout(() => {
    loader.style.display = "none";
    modal.style.display = "flex";
  }, 1200);
});

whatsappBtn.addEventListener("click", () => {
  const phone = "5215620287619";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// ================= MODAL PRODUCTOS =================
const modalProducto = document.getElementById("modalProducto");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const whatsappBuy = document.getElementById("whatsappBuy");

let productoSeleccionado = "";
let precioSeleccionado = "";

function comprar(nombre, precio) {
  productoSeleccionado = nombre;
  precioSeleccionado = precio;
  modalTitle.textContent = nombre;
  modalPrice.textContent = `Precio: $${precio} MXN`;
  modalProducto.style.display = "flex";
}

function cerrarModal() {
  modalProducto.style.display = "none";
}

whatsappBuy.addEventListener("click", () => {
  const phone = "5215620287619";

  const mensaje = `Hola, quiero comprar:
Producto: ${productoSeleccionado}
Precio: $${precioSeleccionado} MXN`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});

const elements = document.querySelectorAll(".animate");

window.addEventListener("scroll", ()=>{
  elements.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});

// MODAL CURSO
const modalCurso = document.getElementById("modalCurso");
const modalCursoTitulo = document.getElementById("modalCursoTitulo");
const modalCursoPrecio = document.getElementById("modalCursoPrecio");
const btnWhatsappCurso = document.getElementById("btnWhatsappCurso");

let cursoNombre = "";
let cursoPrecio = "";

function comprarCurso(nombre, precio){
  cursoNombre = nombre;
  cursoPrecio = precio;
  modalCursoTitulo.textContent = nombre;
  modalCursoPrecio.textContent = "Precio: $" + precio + " MXN";
  modalCurso.style.display = "flex";
}

function cerrarCurso(){
  modalCurso.style.display = "none";
}

btnWhatsappCurso.addEventListener("click", ()=>{
  const phone = "5215620287619";
  const mensaje = `Hola, quiero inscribirme al curso:
Curso: ${cursoNombre}
Precio: $${cursoPrecio} MXN`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`);
});

const footer = document.querySelector(".footer-premium");

window.addEventListener("scroll", ()=>{
  if(footer.getBoundingClientRect().top < window.innerHeight - 100){
    footer.classList.add("show");
  }
});
