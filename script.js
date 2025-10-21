// Smooth page load animations
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add("visible");
  });
});

// Simple contact form alert
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you soon. 😊");
    form.reset();
  });
}
