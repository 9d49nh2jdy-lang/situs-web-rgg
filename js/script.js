// Toggle class Active //
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Ketika Hamburger Menu Di klik //
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
  });
}

// Smooth scroll fallback & tutup nav setelah klik link
document.querySelectorAll(".navbar-nav a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href === "#" || !href) return;
    
    // Tutup mobile nav jika terbuka
    navbarNav.classList.remove("active");
    
    // Fallback smooth scroll untuk browser lama
    const target = document.querySelector(href);
    if (target && !CSS.supports("scroll-behavior", "smooth")) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Klik diluar sidebar untuk menghilangkan nav //
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});
