// ===== Active Navbar Highlighting =====
document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (path === '/') {
        document.getElementById('nav-index')?.classList.add('active');
    } else if (path === '/home') {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (path === '/graphic') {
        document.getElementById('nav-graphic')?.classList.add('active');
    } else if (path === '/about') {
        document.getElementById('nav-about')?.classList.add('active');
    }
});

// ===== Table Search/Filter =====
function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
}
