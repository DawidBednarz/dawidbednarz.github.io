function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show'); // Przełącza klasę 'show'
}

// Resetowanie widoczności menu przy powiększaniu okna
window.addEventListener('resize', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const sidenav = document.querySelector('.sidenav');

    if (window.innerWidth > 1028) {
        mobileMenu.classList.remove('show'); // Usuń klasę 'show' dla mobilnego menu
        sidenav.style.display = "block"; // Pokaż sidebar
    } else {
        sidenav.style.display = "none"; // Ukryj sidebar na małych ekranach
    }
});