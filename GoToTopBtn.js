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
