const toggle = document.querySelector(".mobile-nav-toggle");

const mobNav = document.querySelector(".mobile-nav");

const backdrop = document.querySelector(".backdrop");

toggle?.addEventListener("click", () => {
  const isOpen = mobNav?.getAttribute("data-visible");

  mobNav?.setAttribute("data-visible", isOpen == "true" ? "false" : "true");
  toggle.setAttribute("data-visible", isOpen == "true" ? "false" : "true");
  toggle.setAttribute("aria-expanded", isOpen == "true" ? "false" : "true");
  backdrop?.setAttribute("data-visible", isOpen == "true" ? "false" : "true");
});
