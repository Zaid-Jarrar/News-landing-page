const toggle = document.querySelector(".mobile-nav-toggle");

const mobNav = document.querySelector(".mobile-nav");

const backdrop = document.querySelector(".backdrop");
toggle?.addEventListener("click", () => {
  mobNav.classList.toggle("active");
  toggle.classList.toggle("active");
  backdrop.classList.toggle("active");
});
