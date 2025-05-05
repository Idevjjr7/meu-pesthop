// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Fecha o menu ao clicar em um item do menu mobile
    const mobileLinks = navMenu.querySelectorAll(".mobile-only a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });
});

