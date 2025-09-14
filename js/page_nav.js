function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  // Show selected page
  document.getElementById(pageId).classList.add("active");

  // Update active navigation link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));

  // Find the nav link that corresponds to the page and make it active
  const activeLink = document.querySelector(
    `[onclick="showPage('${pageId}')"]`,
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

function gotoItem(pageId, itemId) {
    console.log("pageId:" + pageId)
    console.log("itemId:" + itemId)
    showPage(pageId)
    document.getElementById(itemId).scrollIntoView(true)
}

// Add smooth scrolling behavior
document.addEventListener("DOMContentLoaded", function () {
  // Add entrance animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  // Observe all cards and sections for animation
  const animatedElements = document.querySelectorAll(
    ".portfolio-item, .about-section, .vision-item, .service-card",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});
