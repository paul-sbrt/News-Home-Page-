const toggleMenu = document.querySelector(".menu");
const menu = document.querySelector(".menu-list");
const closedClick = document.querySelectorAll(".menu-list li a");

toggleMenu.addEventListener("click", function () {
  const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
  toggleMenu.setAttribute("aria-expanded", !open);

  menu.hidden = !menu.hidden;

  if (!menu.hidden) {
    menu.querySelector("a").focus();
  }
});

closedClick.forEach((closedClick) => {
  closedClick.addEventListener("click", function () {
    const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
    toggleMenu.setAttribute("aria-expanded", !open);

    menu.hidden = !menu.hidden;
  });
});
