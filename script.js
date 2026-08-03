function toggleMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('show');
}

window.addEventListener('resize', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (window.innerWidth > 1028) {
    mobileMenu.classList.remove('show');
  }
});