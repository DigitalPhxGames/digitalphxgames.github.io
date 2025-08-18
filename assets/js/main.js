// Load HTML partials (nav + footer)
function loadHTML(selector, file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.querySelector(selector).innerHTML = html;

            // Rebind nav toggle if this is the nav
            if (file.includes('nav')) {
                const hamburger = document.getElementById('hamburger');
                const navLinks = document.getElementById('navLinks');
                hamburger?.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('#nav-placeholder', '/partials/nav.html');
    loadHTML('#footer-placeholder', '/partials/footer.html');
});
