const menu = document.querySelector(".mobile-menu");
const hamburgerBtn = document.querySelector(".hamburger-icon");

const testing = () => {

  // to open menu
  hamburgerBtn.addEventListener("click", () => {
    console.log(menu);
    menu.classList.toggle("menu-toggle");
  });

  // to close menu
//   hamburgerBtn.addEventListener("click", () => {
//     menu.classList.toggle("close-menu");
//   });

  window.addEventListener("click", (e) => {
    if (e.target == menu) {
      menu.classList.remove("menu-toggle");
    }
  });
};
testing();
