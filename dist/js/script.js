const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const posisi = window.scrollY > 0;
    navbar.classList.toggle("Scrolling-active", posisi);
})
const overlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closePopupBtn");
const buttons = document.querySelectorAll('.button');