const toggle = document.querySelector(".mobile-nav-toggle");

const mobNav = document.querySelector(".mobile-nav");

const backdrop = document.querySelector(".backdrop");

function closeMobNav() {
  mobNav?.classList.remove("active");
  toggle?.classList.remove("active");
  backdrop?.classList.remove("active");
}

toggle?.addEventListener("click", () => {
  toggle?.classList.toggle("active");
  mobNav?.classList.toggle("active");
  backdrop?.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!mobNav?.contains(event.target) && !toggle?.contains(event.target)) {
    mobNav?.classList.remove("active");
    backdrop?.classList.remove("active");
    toggle?.classList.remove("active");
  }
});

// when swiping right mobNav will open
// whe  swiping left mobNav will close
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

function handleTouchStart(event) {
  // Record the starting X position
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  // Calculate the distance swiped
  const distance = event.touches[0].clientX - startX;
  const minThreshold = -150;
  const maxThreshold = 150;

  if (distance < minThreshold) {
    // Show the mobile navigation menu if the user swipes to the right by at least 50px
    mobNav?.classList.add("active");
    backdrop?.classList.add("active");
    toggle?.classList.add("active");
  } else if (distance > maxThreshold) {
    mobNav?.classList.remove("active");
    backdrop?.classList.remove("active");
    toggle?.classList.remove("active");
  }
}
