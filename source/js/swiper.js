import Swiper from './swiper-bundle.js'
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,


    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },
});
