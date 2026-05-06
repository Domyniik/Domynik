document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");
  const dropdownItems = document.querySelectorAll(".dropdown__item");

  // AlternÃ¢ncia do menu principal
  if (toggle && nav) {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      nav.classList.toggle("show-menu");
      toggle.classList.toggle("show-icon");
    });
  }

  // Controle dos submenus (dropdowns)
  dropdownItems.forEach((item) => {
    const link = item.querySelector(".nav__link");
    const menu = item.querySelector(".dropdown__menu");

    link.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      // Fecha outros dropdowns antes de abrir o atual
      document.querySelectorAll(".dropdown__menu").forEach((dropdown) => {
        if (dropdown !== menu) {
          dropdown.classList.remove("show-dropdown");
        }
      });

      // Alterna o submenu clicado
      menu.classList.toggle("show-dropdown");
    });
  });

  // Fecha menus ao clicar fora ou pressionar "Esc"
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown__menu").forEach((dropdown) => {
      dropdown.classList.remove("show-dropdown");
    });

    if (nav) nav.classList.remove("show-menu");
    if (toggle) toggle.classList.remove("show-icon");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".dropdown__menu").forEach((dropdown) => {
        dropdown.classList.remove("show-dropdown");
      });

      if (nav) nav.classList.remove("show-menu");
      if (toggle) toggle.classList.remove("show-icon");
    }
  });
});