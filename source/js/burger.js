const navHeader = document.querySelector('.header-navigation');
const navToggle = document.querySelector('.header-navigation__burger');

navHeader.classList.remove('header-navigation--no-js');
navHeader.classList.add('header-navigation--closed');


const changeIcon = (element, icon) => {
  const use = element.querySelector('use');
  use.setAttribute('xlink:href', icon)
}



navToggle.addEventListener('click', function () {
  if (navHeader.classList.contains('header-navigation--closed')) {
    navHeader.classList.remove('header-navigation--closed');
    navHeader.classList.add('header-navigation--opened');
    changeIcon(navToggle, 'img/icons/stack.svg#burgerClosed')
  } else {
    navHeader.classList.add('header-navigation--closed');
    navHeader.classList.remove('header-navigation--opened');

    changeIcon(navToggle, 'img/icons/stack.svg#burger')
  }
});
