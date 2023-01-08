const menu = document.querySelector(".mobile-menu");
const hamburgerBtn = document.querySelector(".hamburger-icon");
const closeBtn = document.querySelector(".close-btn");

const testing = () => {

  // to open menu
  hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-toggle");
  });

  // to close menu
  closeBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-toggle");
  });

  window.addEventListener("click", (e) => {
    if (e.target == menu) {
      menu.classList.remove("menu-toggle");
    }
  });
};
testing();
