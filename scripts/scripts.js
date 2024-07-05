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

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("nav-mobile");
  });
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
        barThickness: 60,
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

// ------------ CONTACT FORM PROCESSING ------------- //
const contactForm = document.getElementById("contactForm");
const notificationContainer = document.getElementById("notificationContainer");
const fade = document.getElementById("fade");
const notificationWindow = document.getElementById("notificationWindow");
const closeWindowBtn = document.getElementById("closeWindowBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting the form...");
      notificationContainer.style.display = "block";
      fade.style.display = "flex";
      await submitContact(
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("message").value
      );
      console.log("Form submitted successfully.");

      // Show modal window after successful submission
      notificationWindow.style.display = "block";
      contactForm.reset();
    } catch (error) {
      console.log("Error submitting the form:", error);
    }
  });

  closeWindowBtn.addEventListener("click", () => {
    notificationContainer.style.display = "none";
    fade.style.display = "none";
    notificationWindow.style.display = "none";
  });
}
