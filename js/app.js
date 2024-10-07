// Script para manejar el botón de abrir/cerrar menú
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Resaltar la sección activa en el navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-white", "bg-white"); // Elimina el estilo de la clase
    if (link.getAttribute("data-target") === current) {
      link.classList.add("text-[#38bdf8]", "bg-white"); // Añade el estilo para la sección activa
    }
  });
});


// Obtener todos los elementos que queremos animar
const fadeElements = document.querySelectorAll('.fadeIn');

// Función para verificar si el elemento está en la vista
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para añadir la clase active cuando el elemento está en la vista
function checkFadeIn() {
    fadeElements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('active');
        }
    });
}

// Comprobar el scroll
window.addEventListener('scroll', checkFadeIn);

// Comprobar el scroll al cargar la página
window.addEventListener('load', checkFadeIn);


window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const sectionProyectos = document.getElementById("section-proyectos");
  const triggerHeight = sectionProyectos.offsetTop - 50; // Ajusta este valor según lo necesites

  if (window.scrollY >= triggerHeight) {
      navbar.classList.remove("md:bg-transparent");
      navbar.classList.add("bg-[#0f172a]"); // Cambia al color deseado
  } else {
      navbar.classList.remove("bg-[#0f172a]");
      navbar.classList.add("md:bg-transparent");
  }
});
