// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", (event) => {
        // Impedir que o clique no menuToggle se propague para o document e feche imediatamente o menu 
        event.stopPropagation();
        navMenu.classList.toggle("show");
    });

    // Fecha o menu ao clicar em um item do menu mobile
    const mobileLinks = navMenu.querySelectorAll(".mobile-only a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });
    // Fecha  o menu ao clicar fora
    document.addEventListener("click", (event) => {
        // Verifica se o navMenu está visível
        if (navMenu.classList.contains("show")) {
            // Verifica se o clique NÃO foi dentro do navMenu E NÃO foi no menuToggle
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                navMenu.classList.remove("show");
            }
        }
    });
});

