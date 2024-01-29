let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
     
      prevEl: ".swiper-button-prev",
    },

    loop: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
      spaceBetween: 30,
      },
      768: {
        slidesPerView:2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
      spaceBetween: 30,
      },
    },
   
  });

  let swiper2 = new Swiper(".cardSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });