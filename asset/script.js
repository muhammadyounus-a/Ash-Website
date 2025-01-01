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
    document.body.classList.toggle('nav-open');
});
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove('show');
    document.body.classList.remove('overflow-hidden');
    document.body.classList.remove('nav-open');
});
// navbar script end //////////////////

// button value added

function setInputValue(button) {
    const inputBox = document.getElementById('resourceInput');
    const actionButton = document.getElementById('actionButton');
    const buttonText = button.querySelector('p').textContent.trim();

    // Set the input value
    inputBox.value = buttonText;

    // Enable the button and change its color
    actionButton.classList.remove('disabled');
    actionButton.classList.add('enabled');
    actionButton.disabled = false;
}

function handleInputChange() {
    const inputBox = document.getElementById('resourceInput');
    const actionButton = document.getElementById('actionButton');

    if (inputBox.value.trim() === "") {
        // Disable the button and make it semi-transparent
        actionButton.classList.remove('enabled');
        actionButton.classList.add('disabled');
        actionButton.disabled = true;
    } else {
        // Enable the button and change its color
        actionButton.classList.remove('disabled');
        actionButton.classList.add('enabled');
        actionButton.disabled = false;
    }
}

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

// popUp code
function popUp() {
    document.getElementById('popup').style.display = 'flex';
    document.body.classList.add('no-scroll'); // Disable scrolling
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('no-scroll'); // Re-enable scrolling
}

function toggleDropdown() {
    const content = document.querySelector('.dropdown-input-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

function selectItem(value) {
    const selectedValue = document.getElementById('selected-value');
    selectedValue.textContent = value;

    // Hide the dropdown after selection
    const content = document.querySelector('.dropdown-input-content');
    content.style.display = 'none';
}