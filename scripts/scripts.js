document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".section__wrapper");

  wrappers.forEach((wrapper) => {
    const button = wrapper.querySelector(".more-button");
    const fadeDiv = wrapper.querySelector(".section__wrapper-fade");

    button.addEventListener("click", () => {
      if (wrapper.style.maxHeight === "100%") {
        wrapper.style.minHeight = "10rem";
        wrapper.style.maxHeight = "16rem";
        button.textContent = "Read more";
        if (!wrapper.contains(fadeDiv)) {
          wrapper.appendChild(fadeDiv);
        }
      } else {
        wrapper.style.minHeight = "23rem";
        wrapper.style.maxHeight = "100%";
        button.textContent = "Read less";
        if (fadeDiv) {
          fadeDiv.remove();
        }
      }
    });
  });
});
