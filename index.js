const navControl = document.getElementById("navbar-control");
const navMenu = document.getElementById("navbar-default");
navControl.addEventListener("click", () => {
    if (navMenu.classList.contains("hidden")) {
        navMenu.classList.remove("hidden");
    } else {
        navMenu.classList.add("hidden");
    }
});

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}