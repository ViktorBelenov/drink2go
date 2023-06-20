import './burger.js';
import Swiper from './swiper-bundle.js'
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

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
  // Инициализация карты
var map = L.map('map').setView([59.968137, 30.316272], 25);

  // Добавление тайлового слоя карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

  // Создание и добавление кастомного пина
var customIcon = L.icon({
    iconUrl: '../img/map/map-pin.svg',
    iconSize: [38, 50], // размеры иконки
    iconAnchor: [19, 50], // якорь иконки (центр нижней точки)
});

var marker = L.marker([59.968137, 30.316272], { icon: customIcon }).addTo(map);
