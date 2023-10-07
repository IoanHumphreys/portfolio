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

// FAQ
// JavaScript for FAQ section
const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const parent = toggle.parentElement;
        const answer = parent.querySelector(".faq-answer");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            toggle.querySelector(".faq-icon").textContent = "+";
        } else {
            // Hide all other answers before showing this one
            document.querySelectorAll(".faq-answer").forEach((faqAnswer) => {
                faqAnswer.style.display = "none";
            });

            answer.style.display = "block";
            toggle.querySelector(".faq-icon").textContent = "-";
        }
    });
});
