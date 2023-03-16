const navControl = document.getElementById("navbar-control");
const navMenu = document.getElementById("navbar-default");
navControl.addEventListener("click", () => {
    if (navMenu.classList.contains("hidden")) {
        navMenu.classList.remove("hidden");
    } else {
        navMenu.classList.add("hidden");
    }
});