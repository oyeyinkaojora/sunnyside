let toggleMenu = document.querySelector("#toggle-menu");
let mobileMenu = document.querySelector("#mobile-menu");

let myImage = document.querySelector(".menu-bar");
let currentIcon = "/images/icon-hamburger.svg";

toggleMenu.addEventListener("click", () => {
  if (currentIcon === "/images/icon-hamburger.svg") {
    myImage.setAttribute("src", "/images/icons8-close.svg");
    currentIcon = "/images/icons8-close.svg";
    mobileMenu.style.display = "block";
  } else {
    myImage.setAttribute("src", "/images/icon-hamburger.svg");
    currentIcon = "/images/icon-hamburger.svg";
    mobileMenu.style.display = "none";
  }
});
