const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggle.innerHTML = 'Dark Mode';
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggle.innerHTML = 'Light Mode';
    }
});
