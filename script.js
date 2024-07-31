const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const mobileOpen = document.getElementById("mobile-navigation");
function Open() {
  mobileOpen.classList.remove("hide");
  mobileOpen.classList.remove("NavOut");
  mobileOpen.classList.add("NavIns");
  document.body.style.overflow = "hidden";
}

function Close() {
  mobileOpen.classList.remove("NavIns");
  mobileOpen.classList.add("NavOut");
  document.body.style.overflow = "visible";
}

hamburger.addEventListener("click", Open);
closeBtn.addEventListener("click", Close);
