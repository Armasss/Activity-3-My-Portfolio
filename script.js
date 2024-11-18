function toggleMenu() {
    const sidebar = document.querySelector('.burger_links');
    sidebar.classList.add('show');
}

function hideMenu() {
    const sidebar = document.querySelector('.burger_links');
    sidebar.classList.remove('show');
}

function closeMenuOnClickOutside(event) {
    const sidebar = document.querySelector('.burger_links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (!sidebar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        sidebar.classList.remove('show'); 
    }
}

document.addEventListener('click', closeMenuOnClickOutside);