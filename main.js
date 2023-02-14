const toggleBtn = document.getElementsByClassName("bx-menu")[0];
const closeBtn = document.getElementsByClassName("bx-menu-alt-right")[0];
const navList = document.getElementById("navList");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  toggleBtn.style.display = "none";
  closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("active");
  toggleBtn.style.display = "flex";
  closeBtn.style.display = "none";
});
