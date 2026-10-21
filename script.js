
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".nav-link");

// Mobile navigation menu
if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the mobile menu after a link is selected
    if (sidebar) {
      sidebar.classList.remove("open");
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
