const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuBtn = document.querySelector(".submenu-btn");
const subMenu = document.querySelector(".sub-menu");
const barsOpenIcon = document.querySelector(".bars-icon");
const barsCloseIcon = document.querySelector(".x-mark");
const nav = document.querySelector(".nav");
const cardOpenBtn = document.querySelector(".card-icon");
const cardClosebtn = document.querySelector(".card-close-btn");
const card = document.querySelector(".card");
const overlay = document.querySelector(".overlay");

// change dark mode to light mode
toggleThemeBtns.forEach((btns) => {
  btns.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
// sub menu mobile open click
submenuBtn.addEventListener("click", function (e) {
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
  subMenu.classList.toggle("submenu--open");
});
function closeNav() {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("overlay--visible");
}
//
function closeCard() {
  card.classList.remove("left-0");
  card.classList.add("-left-64");
  overlay.classList.remove("overlay--visible");
}
// bars icon
barsOpenIcon.addEventListener("click", function () {
  nav.classList.remove("-right-64");
  nav.classList.add("right-0");
  overlay.classList.add("overlay--visible");
  overlay.addEventListener("click", closeNav);
});
// card open btn
cardOpenBtn.addEventListener("click", function () {
  card.classList.remove("-left-64");
  card.classList.add("left-0");
  overlay.classList.add("overlay--visible");
  overlay.addEventListener("click", closeCard);
});


// bars close btn
barsCloseIcon.addEventListener("click", closeNav);
cardClosebtn.addEventListener("click", closeCard);
// overlay close menu bars mobile

