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
    link.classList.remove("text-white", "bg-gray-700"); // Elimina el estilo de la clase
    if (link.getAttribute("data-target") === current) {
      link.classList.add("text-[#38bdf8]", "bg-gray-700"); // Añade el estilo para la sección activa
    }
  });
});


