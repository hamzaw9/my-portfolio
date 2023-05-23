document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-mbl").classList.add("nav-mbl-active");
    document.querySelector(".nav-mbl").classList.remove("nav-mbl-inactive");
  });
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".nav-mbl").classList.remove("nav-mbl-active");
    document.querySelector(".nav-mbl").classList.add("nav-mbl-inactive");
  });
  document.querySelector(".menu1").addEventListener("click", () => {
    document.querySelector(".nav-mbl").classList.remove("nav-mbl-active");
    document.querySelector(".nav-mbl").classList.add("nav-mbl-inactive");
  });
  document.querySelector(".menu2").addEventListener("click", () => {
    document.querySelector(".nav-mbl").classList.remove("nav-mbl-active");
    document.querySelector(".nav-mbl").classList.add("nav-mbl-inactive");
  });
  document.querySelector(".menu3").addEventListener("click", () => {
    document.querySelector(".nav-mbl").classList.remove("nav-mbl-active");
    document.querySelector(".nav-mbl").classList.add("nav-mbl-inactive");
  });
});
