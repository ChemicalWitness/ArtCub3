const Swiper = window.Swiper;

export const initProjectsSlider = () =>
  new Swiper('.projects__slider', {
    navigation: {
      nextEl: '.projects__slider-btn-next',
      prevEl: '.projects__slider-btn-prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });
