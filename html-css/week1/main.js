const toggleBtn = document.querySelector(".hamburger-icon");
const navList = document.querySelector(".navigation-list");

toggleBtn.addEventListener("click", function () {
  navList.classList.toggle("active");
});
