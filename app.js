document.addEventListener('DOMContentLoaded', function () {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    
    const gallery = document.querySelector('.gallery');
    const toggleBtn = document.querySelector('.toggle-btn');
    let isExpanded = false;

    toggleBtn.addEventListener('click', function () {
        isExpanded = !isExpanded;

        if (isExpanded) {
            gallery.classList.remove('collapsed');
            gallery.classList.add('expanded');
            toggleBtn.textContent = 'See Less';

            // Add animation to newly visible items
            const items = gallery.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
                if (index >= 4) {
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                    item.style.animationDelay = `${(index - 3) * 0.1}s`;
                }
            });
        } else {
            gallery.classList.remove('expanded');
            gallery.classList.add('collapsed');
            toggleBtn.textContent = 'See More';
        }
    });
});
