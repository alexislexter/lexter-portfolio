document.addEventListener('DOMContentLoaded', () => {
    // Single Page Navigation Switcher
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active-section');
                if (section.id === targetId) {
                    section.classList.add('active-section');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Accessibility Font Sizer for Visually Impaired & Elderly
    const btnDecrease = document.getElementById('font-decrease');
    const btnNormal = document.getElementById('font-normal');
    const btnIncrease = document.getElementById('font-increase');
    
    let currentFontSize = 18; // base

    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > 14) {
            currentFontSize -= 2;
            document.documentElement.style.setProperty('--base-font-size', currentFontSize + 'px');
        }
    });

    btnNormal.addEventListener('click', () => {
        currentFontSize = 18;
        document.documentElement.style.setProperty('--base-font-size', '18px');
    });

    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < 26) {
            currentFontSize += 2;
            document.documentElement.style.setProperty('--base-font-size', currentFontSize + 'px');
        }
    });
});
// Handle anchor links between sections
document.querySelectorAll('.section-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetSectionId = this.getAttribute('data-target');
        const targetElementId = this.getAttribute('href');

        // Switch active section in navigation
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active-section');
        });
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }

        // Update active class on nav items if applicable
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
            if (nav.getAttribute('data-section') === targetSectionId) {
                nav.classList.add('active');
            }
        });

        // Scroll smoothly to target project card
        if (targetElementId && targetElementId !== '#') {
            setTimeout(() => {
                const element = document.querySelector(targetElementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    });
});