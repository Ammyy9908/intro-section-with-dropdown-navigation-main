//menu btn
const menu_btn = document.querySelector(".menu-btn");
const menu_overlay = document.querySelector(".mobile-menu-overlay");
const menu_close_btn = document.querySelector(".menu-close");
const menu = document.querySelector(".mobile_menu");
menu_btn.addEventListener("click", function () {
  document.body.classList.toggle("hidden");
  menu.classList.add("menu-show");
});

menu_close_btn.addEventListener("click", function () {
  document.body.classList.toggle("hidden");
  menu.classList.remove("menu-show");
});

menu_overlay.addEventListener("click", (e) => {
  const targetClass = e.target.className;

  if (targetClass.includes("menu-show")) {
    document.body.classList.toggle("hidden");
    menu.classList.remove("menu-show");
  }
});
