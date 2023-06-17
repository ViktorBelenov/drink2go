import './burger.js';
import Swiper from './swiper-bundle.js'
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,


    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
console.log(swiper);