// navbar script start
window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    document.body.classList.toggle('overflow-hidden');
});
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove('show');
    document.body.classList.remove('overflow-hidden');
});
// navbar script end //////////////////

// navitems underline changred 
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-items li a");
    const navLine = document.querySelector(".nav-line");
    const sections = document.querySelectorAll(".section, .section-2");
    navItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            navItems.forEach((nav) => nav.classList.remove("active"));
            item.classList.add("active");
            sections.forEach((section) => section.classList.remove("active-section"));
            const targetId = item.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active-section");
            }
            const parentLi = item.parentElement;
            const rect = parentLi.getBoundingClientRect();
            navLine.style.width = `${rect.width}px`;
            navLine.style.left = `${parentLi.offsetLeft - 20}px`;
        });
    });
});