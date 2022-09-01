// mixitupp
var mixer = mixitup(".portfolio-grid-container");

// swiper slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

// smooth animation
$(function () {
  $(".next-section a, .next-section-button a").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
});
