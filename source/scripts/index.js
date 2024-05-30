/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-header__toggle');

navToggle.classList.remove('main-header__toggle--nojs');
navMain.classList.add('main-navigation--closed');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
    navToggle.classList.add('main-header__toggle--close');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
    navToggle.classList.remove('main-header__toggle--close');
  }
});
