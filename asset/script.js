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