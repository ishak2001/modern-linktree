function toggleMenu(event) {
  event.preventDefault();
  var sidebar = document.getElementById("bar");
  var icon = document.getElementById("menu-icon");
  sidebar.classList.toggle("show");
  icon.classList.toggle("fa-xmark");
  icon.classList.toggle("fa-bars");
}
document.getElementById("menu-icon").addEventListener("click", toggleMenu);