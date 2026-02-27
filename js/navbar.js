// ================================
// NAVBAR TOGGLE FOR MOBILE
// ================================
const mobileToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ================================
// FILTER FUNCTION FOR WORK PAGE
// ================================
function filterWork(category) {
  const sections = document.querySelectorAll(".category-section");
  const buttons = document.querySelectorAll(".filter-btn");

  // Remove active from all buttons
  buttons.forEach(b => b.classList.remove("active"));

  // Add active to correct button
  if (category !== "all") {
    const activeBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
    if (activeBtn) activeBtn.classList.add("active");
  } else {
    document.querySelector(`.filter-btn[data-category="all"]`).classList.add("active");
  }

  // Show/Hide sections
  sections.forEach(section => {
    if (category === "all" || section.dataset.category === category) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

// ================================
// CLICK LISTENERS FOR FILTER BUTTONS
// ================================
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    filterWork(category);
  });
});

// ================================
// HOMEPAGE → WORK PAGE CATEGORY SCROLL
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  if (!category) return;

  // 1. Filter the correct section
  filterWork(category);

  // 2. Scroll to the section (if not "all")
  if (category !== "all") {
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});