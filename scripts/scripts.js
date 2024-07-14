/* STICKING NAVIGATION BAR */
// Function to update scroll padding top based on nav and links flex container heights
function updateScrollPaddingTop() {
  const navSection = document.querySelector(".nav-container");
  const linksWrapperHeight =
    document.querySelector(".links-wrapper").offsetHeight;
  const navHeight = navSection.classList.contains("sticking") ? 4 * 16 : 6 * 16; // Convert rem to px
  const scrollPaddingTop = linksWrapperHeight + navHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding-top",
    scrollPaddingTop + "px"
  );
}

// Function to handle scroll events
function handleScroll() {
  const navSection = document.querySelector(".nav-container");
  if (window.scrollY > 0) {
    navSection.classList.add("sticking");
  } else {
    navSection.classList.remove("sticking");
  }
  updateScrollPaddingTop(); // Update scroll padding top on scroll
}

// Scroll event listener to toggle the "sticking" class
window.addEventListener("scroll", handleScroll);

// Load event listener to set initial state and update scroll padding top
window.addEventListener("load", () => {
  handleScroll(); // Check the initial scroll position and update classes and padding
  updateScrollPaddingTop(); // Update scroll padding top on load
});

// Resize event listener to update scroll padding top on window resize
window.addEventListener("resize", updateScrollPaddingTop);

// Initial call to set the scroll padding top
updateScrollPaddingTop();

/* MOBILE MENU */
const hamburger = document.getElementById("hamburger");
const fadeMobile = document.getElementById("fadeMobile");
const nav = document.getElementById("nav");
const closeButton = document.getElementById("closeButton");
const navItems = document.querySelectorAll(".nav-item");
const body = document.body;

hamburger.addEventListener("click", () => {
  const isNavOpen = nav.classList.toggle("nav-mobile");
  body.classList.toggle("lock-scroll", isNavOpen);
  fadeMobile.classList.toggle("show-fade-mobile");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("nav-mobile");
    body.classList.remove("lock-scroll");
    fadeMobile.classList.remove("show-fade-mobile");
  });
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav-mobile");
  body.classList.remove("lock-scroll");
  fadeMobile.classList.remove("show-fade-mobile");
});

/* CHART.JS */
// Accessing the text content of the span elements
document.addEventListener("DOMContentLoaded", function () {
  const value1 = parseInt(document.getElementById("price1").textContent);
  const value2 = parseInt(document.getElementById("price2").textContent);
  const value3 = parseInt(document.getElementById("price3").textContent);
  const value4 = parseInt(document.getElementById("price4").textContent);

  const yValues = [value1, value2, value3, value4];
  const xValues = ["Start", "Standard", "Standard +", "Premium"];
  const barColors = ["blueviolet", "green", "orange", "brown"];

  const minValue = Math.min(...yValues);
  const maxValue = Math.max(...yValues);

  new Chart("pricingChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          barThickness: 70,
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Price Guide",
          font: {
            size: 24,
          },
        },
        subtitle: {
          display: true,
          text: `$${minValue} - $${maxValue}`,
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

// ------------ GO TO TOP BUTTON ------------- //
document.addEventListener("DOMContentLoaded", () => {
  const upButton = document.getElementById("goTop");
  if (upButton) {
    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        upButton.style.display = "block";
      } else {
        upButton.style.display = "none";
      }
    }
  }
});

// When the user clicks on the button, scroll to the top of the document
function goTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* PRICE in TAX RETURNS */
document.addEventListener("DOMContentLoaded", () => {
  const priceElement = document.getElementById("price");
  const targetPrice = 245;
  let hasAnimated = false;

  // Function to animate the price
  function animatePrice() {
    let currentPrice = 0;
    const increment = targetPrice / 100; // Adjust this to control speed

    const interval = setInterval(() => {
      currentPrice += increment;
      if (currentPrice >= targetPrice) {
        currentPrice = targetPrice;
        clearInterval(interval);
      }
      priceElement.textContent = Math.floor(currentPrice);
    }, 20); // Adjust this to control speed
  }

  // Function to check if the element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Scroll event listener
  window.addEventListener("scroll", () => {
    if (isInViewport(priceElement) && !hasAnimated) {
      hasAnimated = true;
      animatePrice();
    }
  });
});
