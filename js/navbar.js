// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dropdown toggle on mobile
const dropdown = document.querySelector('.dropdown');
const dropdownLink = document.querySelector('.dropdown-link');

dropdownLink.addEventListener('click', (e) => {
  if(window.innerWidth <= 768){
    e.preventDefault(); // prevent navigation
    dropdown.classList.toggle('active');
  }
});
const scrollArrow = document.querySelector('.scroll-arrow');
const workScroll = document.querySelector('.work-scroll');

if (scrollArrow && workScroll) {
  scrollArrow.addEventListener('click', () => {
    const cardWidth = document.querySelector('.work-card').offsetWidth;
    workScroll.scrollBy({
      left: cardWidth + 24, // card + gap
      behavior: 'smooth'
    });
  });
}
