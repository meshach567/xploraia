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

    const toggleButton = document.getElementById('toggleButton');
        const row2 = document.querySelector('.grid-row-2');
        const row3 = document.querySelector('.grid-row-3');
        let state = 0; // 0: initial, 1: row2 shown, 2: all shown

        toggleButton.addEventListener('click', () => {
            if (toggleButton.textContent === 'See More') {
                if (state === 0) {
                    row2.classList.add('show');
                    state = 1;
                } else if (state === 1) {
                    row3.classList.add('show');
                    toggleButton.textContent = 'See Less';
                    state = 2;
                }
            } else {
                if (state === 2) {
                    row3.classList.remove('show');
                    state = 1;
                } else if (state === 1) {
                    row2.classList.remove('show');
                    toggleButton.textContent = 'See More';
                    state = 0;
                }
            }
    });
});
