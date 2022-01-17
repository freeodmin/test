const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const body = document.body;


function toggleMenu() {
  if (menu.classList.contains("menu--show")) {
    //body.classList.remove("overflow-hidden");
    menu.classList.remove("menu--show");
    hamburgerMenu.classList.remove("hamburger-menu--active");
    
  } else {
    menu.classList.add("menu--show");
    //body.classList.add("overflow-hidden");
    hamburgerMenu.classList.add("hamburger-menu--active");
  }
}

hamburgerMenu.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)