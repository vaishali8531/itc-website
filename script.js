document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
  this.reset();
});

// Animation on scroll
const sections = document.querySelectorAll(".fade-in");
const options = {
  threshold: 0.1
};
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Event filter
document.getElementById("filter").addEventListener("change", function () {
  const value = this.value;
  document.querySelectorAll(".event").forEach(event => {
    if (value === "all") {
      event.style.display = "block";
    } else {
      event.style.display = event.classList.contains(value) ? "block" : "none";
    }
  });
});
