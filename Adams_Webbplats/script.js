const toggleHamburgerMenu = document.getElementsByClassName("navToggle")[0];
const navLinks = document.getElementsByClassName("navLinks")[0];

toggleHamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const toggleDarkMode = document.getElementsByClassName("darkModeToggle")[0];
const toggleLightMode = document.getElementsByClassName("lightModeToggle")[0];

toggleDarkMode.addEventListener("click", () => {
    toggleDarkMode.style.display ="none";
    toggleLightMode.style.display ="inline";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    for (let i = 0; i < document.querySelectorAll(".navLinks li a").length; i++)
        document.querySelectorAll(".navLinks li a")[i].style.color = "black";
});

toggleLightMode.addEventListener("click", () => {
    toggleLightMode.style.display ="none";
    toggleDarkMode.style.display ="inline";
    document.body.style.backgroundColor = "";
    document.body.style.color = "";

    for (let i = 0; i < document.querySelectorAll(".navLinks li a").length; i++)
        document.querySelectorAll(".navLinks li a")[i].style.color = "";
});