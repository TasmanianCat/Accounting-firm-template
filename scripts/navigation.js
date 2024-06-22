// Function to update scroll padding top based on nav and top links heights
function updateScrollPaddingTop() {
  const navSection = document.querySelector(".nav-container");
  const topLinksHeight = document.querySelector(
    ".quick-links-bar-container"
  ).offsetHeight;
  const navHeight = navSection.classList.contains("sticking") ? 5 * 16 : 8 * 16; // Convert rem to px
  const scrollPaddingTop = topLinksHeight + navHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding-top",
    scrollPaddingTop + "px"
  );
}

// Scroll event listener to toggle the "sticking" class
window.addEventListener("scroll", () => {
  const navSection = document.querySelector(".nav-container");
  if (window.scrollY > 0) {
    navSection.classList.add("sticking");
  } else {
    navSection.classList.remove("sticking");
  }
  updateScrollPaddingTop(); // Update scroll padding top on scroll
});

// Load event listener to set initial state and update scroll padding top
window.addEventListener("load", () => {
  const navSection = document.querySelector(".nav-container");
  if (window.scrollY > 0) {
    navSection.classList.add("sticking");
  } else {
    navSection.classList.remove("sticking");
  }
  updateScrollPaddingTop(); // Update scroll padding top on load
});

// Resize event listener to update scroll padding top on window resize
window.addEventListener("resize", updateScrollPaddingTop);

// /* Sticky navigation */
// window.addEventListener("scroll", () => {
//   const navSection = document.querySelector(".nav-container");
//   if (window.scrollY > 0) {
//     navSection.classList.add("sticking");
//   } else {
//     navSection.classList.remove("sticking");
//   }
// });

// // Ensure correct position on initial load
// window.addEventListener("load", () => {
//   const navSection = document.querySelector(".nav-container");
//   if (window.scrollY > 0) {
//     navSection.classList.add("sticking");
//   } else {
//     navSection.classList.remove("sticking");
//   }
// });

// /* Fixing positioning when scroll to anchors  */
// const topLinksHeight = document.querySelector(
//   ".quick-links-bar-container"
// ).offsetHeight;
// console.log(topLinksHeight);

// const navHeight = document.querySelector(".nav-container").offsetHeight;
// console.log(navHeight);

// const substractValue = topLinksHeight;
// document.documentElement.style.setProperty(
//   "--scroll-padding-top",
//   topLinksHeight + navHeight + "px"
// );

/* Mobile menu */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const hamburgerElements = document.querySelectorAll(".hamburger-el");
const navItems = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
  const isNavOpen = nav.classList.toggle("nav-mobile");

  hamburgerElements.forEach((el) => el.classList.toggle("elements-color"));

  if (isNavOpen) {
    navItems.forEach((item) => {
      item.style.animation = "none";
      item.offsetHeight;
      item.style.animation = "";
    });
  } else {
    navItems.forEach((item) => {
      item.style.animation = "none";
    });
  }
});
