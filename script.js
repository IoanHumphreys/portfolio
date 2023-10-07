// JavaScript to trigger the fade-in animation on scroll
function scrollFade() {
    const elements = document.querySelectorAll('.scroll-fade');

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.classList.add('fade-in');
        }
    });
}

// Event listener to trigger scrollFade function on scroll
window.addEventListener('scroll', scrollFade);

// Initialize the scrollFade function when the page loads
window.addEventListener('DOMContentLoaded', () => {
    scrollFade();
});

function scrollToSection(id) {
    const section = document.querySelector(id);
    if (section) {
        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop
        });
    }
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href');
        scrollToSection(targetId);
    });
});

document.addEventListener("mousemove", (event) => {
    const trail = document.querySelector(".trail");
    trail.style.left = event.pageX + "px";
    trail.style.top = event.pageY + "px";
});
