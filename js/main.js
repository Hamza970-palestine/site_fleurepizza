document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });
    }
});
