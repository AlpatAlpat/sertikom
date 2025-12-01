const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const posisi = window.scrollY > 0;
    navbar.classList.toggle("Scrolling-active", posisi);
})
const overlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closePopupBtn");
const buttons = document.querySelectorAll('.button');

// buka popup
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "flex";
  });
});

// tutup popup
closeBtn.onclick = () => overlay.style.display = "none";

// klik area gelap → tutup
overlay.onclick = (e) => {
  if (e.target === overlay) overlay.style.display = "none";
};

// debug submit
document.getElementById("popupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form berhasil dikirim!");
});
