// Section ease-in on scroll
function animateSectionsOnScroll() {
  const sections = document.querySelectorAll('.section-animate');
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('resize', animateSectionsOnScroll);
document.addEventListener('DOMContentLoaded', animateSectionsOnScroll);

// Smooth scroll for anchor links
document.querySelectorAll('a.smooth-scroll').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 40,
          behavior: 'smooth'
        });
      }
    }
  });
});
const aboutText = document.getElementById("about-text");
  const readMoreLink = document.getElementById("read-more");

  const fullText = aboutText.textContent.trim();
  const words = fullText.split(" ");
  const previewText = words.slice(0, 30).join(" ") + "...";

  // Initially show preview
  aboutText.textContent = previewText;

  let expanded = false;
  readMoreLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (!expanded) {
      aboutText.textContent = fullText;
      readMoreLink.textContent = "Read less";
    } else {
      aboutText.textContent = previewText;
      readMoreLink.textContent = "... Read more";
    }
    expanded = !expanded;
  });
