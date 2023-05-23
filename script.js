document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-mbl").classList.add("nav-mbl-active");
    document.querySelector(".nav-mbl").classList.remove("nav-mbl-inactive");
  });
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".nav-mbl").classList.remove("nav-mbl-active");
    document.querySelector(".nav-mbl").classList.add("nav-mbl-inactive");
  });
});
