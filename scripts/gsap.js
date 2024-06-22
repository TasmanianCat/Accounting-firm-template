document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = [".about-us-section", ".services-section"];

  sections.forEach((section) => {
    gsap.to(section, {
      opacity: 1,
      duration: 2, // Adjust the duration if needed
      width: "100%",
      ease: "power2.out", // Use easing for a smoother effect
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Start animation when the top of the element is 80% from the top of the viewport
        end: "bottom center",
        markers: true,
        scrub: 1, // Smoother scrubbing
      },
    });
  });
});
