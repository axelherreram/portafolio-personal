// Manejar el botón de abrir/cerrar menú
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Para los enlaces del menú responsivo
const navLinks = document.querySelectorAll('.menu-responsive a');

// Evento para abrir y cerrar el menú al hacer clic en el ícono del menú
menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});

// Función para cerrar el menú cuando se hace clic en un enlace del menú responsivo
function closeMenu() {
    mobileMenu.classList.add('hidden');
}

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Resaltar la sección activa en el navbar
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navbarLinks.forEach((link) => {
        link.classList.remove("text-white", "bg-white");
        if (link.getAttribute("data-target") === current) {
            link.classList.add("text-[#38bdf8]", "bg-white");
        }
    });
});

// Funcionalidad para las animaciones de fadeIn
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

// Comprobar el scroll para las animaciones de fadeIn
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// Cambiar la clase del navbar al hacer scroll
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

// Desplazamiento suave al hacer clic en enlaces del navbar
const navLinksa = document.querySelectorAll('.nav-link');

navLinksa.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        const offset = 80; 
        const elementPosition = targetSection.offsetTop - offset;

        // Desplazamiento suave hasta la sección con el ajuste
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});
