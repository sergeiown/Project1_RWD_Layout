const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
}

navMenu.addEventListener("click", mobileMenuHidden);

function mobileMenuHidden() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("overflow-hidden");
}
