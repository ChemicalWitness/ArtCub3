const Swiper = window.Swiper;

export const initNewsSlider = () =>
  new Swiper('.news__slider', {
    navigation: {
      nextEl: '.news__slider-btn-next',
      prevEl: '.news__slider-btn-prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });
