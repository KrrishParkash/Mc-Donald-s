document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");

  // !!!!!!!!!!! Overlay Menu !!!!!!!!!!!!!
  const overlay = document.querySelector(".overlay");
  const closeButton = document.querySelector(".close-btn");

  burger.addEventListener("click", function () {
    overlay.classList.toggle("active");
  });

  closeButton.addEventListener("click", function () {
    overlay.classList.remove("active");
  });
});

// !!!!!!!!! Accordion JS !!!!!!!!!!
document.addEventListener("DOMContentLoaded", function () {
  const accordionLink = document.getElementById("accordion-link");
  const accordionContent = document.getElementById("accordion-content");
  const accordionIcon = document.getElementById("accordion-icon");

  accordionLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
      accordionIcon.classList.remove("fa-minus");
      accordionIcon.classList.add("fa-plus");
    } else {
      accordionContent.style.display = "block";
      accordionIcon.classList.remove("fa-plus");
      accordionIcon.classList.add("fa-minus");
    }
  });
});
