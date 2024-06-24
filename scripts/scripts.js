/* STICKING NAVIGATION BAR */
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

/* MOBILE MENU */
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

// SHOW HIDDEN CONTENT FOR CARDS
const tariff1 = document.getElementById("tar1");
const tariffContent1 = document.getElementById("tarCont1");
const tariff2 = document.getElementById("tar2");
const tariffContent2 = document.getElementById("tarCont2");
const tariff3 = document.getElementById("tar3");
const tariffContent3 = document.getElementById("tarCont3");
const tariff4 = document.getElementById("tar4");
const tariffContent4 = document.getElementById("tarCont4");
const tariff5 = document.getElementById("tar5");
const tariffContent5 = document.getElementById("tarCont5");
const tarAskFor = document.getElementById("tarAskFor");

/* Tariff 1 */
tariff1.addEventListener("mouseenter", () => {
  tariff1.classList.add("tar-content-hidden");
  tariff4.classList.add("tar-content-hidden");
  tariffContent1.classList.add("tar-content-show");
});

tariffContent1.addEventListener("mouseleave", () => {
  tariff1.classList.remove("tar-content-hidden");
  tariff4.classList.remove("tar-content-hidden");
  tariffContent1.classList.remove("tar-content-show");
});
/* Tariff 2 */
tariff2.addEventListener("mouseenter", () => {
  tariff2.classList.add("tar-content-hidden");
  tariff5.classList.add("tar-content-hidden");
  tariffContent2.classList.add("tar-content-show");
});

tariffContent2.addEventListener("mouseleave", () => {
  tariff2.classList.remove("tar-content-hidden");
  tariff5.classList.remove("tar-content-hidden");
  tariffContent2.classList.remove("tar-content-show");
});
/* Tariff 3 */
tariff3.addEventListener("mouseenter", () => {
  tariff3.classList.add("tar-content-hidden");
  tarAskFor.classList.add("tar-content-hidden");
  tariffContent3.classList.add("tar-content-show");
});

tariffContent3.addEventListener("mouseleave", () => {
  tariff3.classList.remove("tar-content-hidden");
  tarAskFor.classList.remove("tar-content-hidden");
  tariffContent3.classList.remove("tar-content-show");
});

/* Tariff 4 */
tariff4.addEventListener("mouseenter", () => {
  tariff4.classList.add("tar-content-hidden");
  tariff1.classList.add("tar-content-hidden");
  tariffContent4.classList.add("tar-content-show");
});

tariffContent4.addEventListener("mouseleave", () => {
  tariff4.classList.remove("tar-content-hidden");
  tariff1.classList.remove("tar-content-hidden");
  tariffContent4.classList.remove("tar-content-show");
});

/* Tariff 5 */
tariff5.addEventListener("mouseenter", () => {
  tariff5.classList.add("tar-content-hidden");
  tariff2.classList.add("tar-content-hidden");
  tariffContent5.classList.add("tar-content-show");
});

tariffContent5.addEventListener("mouseleave", () => {
  tariff5.classList.remove("tar-content-hidden");
  tariff2.classList.remove("tar-content-hidden");
  tariffContent5.classList.remove("tar-content-show");
});

/* CHART.JS */
var xValues = ["Start", "Standart", "Standart +", "Growth", "Premium"];
var yValues = [300, 350, 550, 750, 1150];
var barColors = ["blueviolet", "green", "blue", "orange", "brown"];

new Chart("pricingChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Price guide 2024",
        font: {
          size: 24,
        },
      },
      subtitle: {
        display: true,
        text: "$300 - $1150",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      datalabels: {
        align: "end",
        anchor: "end",
        formatter: function (value, context) {
          return "$" + value;
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  plugins: [ChartDataLabels],
});
