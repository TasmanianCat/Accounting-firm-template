/* NAVIGATION */
document.addEventListener("DOMContentLoaded", () => {});

window.onscroll = function () {
  myFunction();
};

const navigation = document.getElementById("navigation");
const header = document.getElementById("header");
const sticky = navigation.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navigation.classList.add("sticky");
    header.classList.add("add-padding-to-sticky");
  } else {
    navigation.classList.remove("sticky");
    header.classList.remove("add-padding-to-sticky");
  }
}

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
