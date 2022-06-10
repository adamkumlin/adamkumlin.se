const toggleHamburgerMenu = document.getElementsByClassName("navToggle")[0];
const navLinks = document.getElementsByClassName("navLinks")[0];

toggleHamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});