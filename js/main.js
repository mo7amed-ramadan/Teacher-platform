// Drop down menu effect
const dropButton = document.getElementById("dropbutton");
const dropdownMenu = document.getElementById("dropdown");

dropButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
// menu effect
const bar = document.getElementById("bar");
const xmark = document.getElementById("xmark");
const navContainer = document.getElementById("nav-container");
const navItems = document.getElementById("nav-items");
const explore = document.getElementById("explore");
// when click on bar
bar.addEventListener("click", () => {
  // nav contianer
  navContainer.style.display = "block";
  navContainer.style.position = "absolute";
  navContainer.style.left = "0";
  navContainer.style.top = "0";
  navContainer.style.background = "#2c1f4a";
  navContainer.style.width = "fit-content";
  navContainer.style.padding = "0px 10px";
  navContainer.style.height = "100%";
  navContainer.style.borderRadius = "0 20px 20px 0";
  // nav items
  navItems.style.height = "70%";
  navItems.style.flexFlow = "column";
  navItems.style.alignItems = "center";
  // drop menu
  dropdownMenu.style.width = "283px";
  dropdownMenu.style.left = "0";
  dropdownMenu.style.top = "167px";
  // explore button
  explore.style.width = "240px";
  explore.style.height = "45px";
  // close mark
  xmark.style.display = "block";
  xmark.style.position = "absolute";
  xmark.style.left = "285px";
  xmark.style.top = "20px";
});
xmark.addEventListener("click", () => {
  navContainer.style.display = "none";
  xmark.style.display = "none";
});
