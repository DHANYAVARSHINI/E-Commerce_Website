// Image Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// About Container

ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});


// Discover container

ScrollReveal().reveal(".box", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".place-text", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200, // Adjust the delay for a staggered effect
});



