///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".mobile-menu");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("hidden");
});
