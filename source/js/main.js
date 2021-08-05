const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const buttonOpen = document.querySelector('.countries-desc__item-wrapper-button');
const buttonClose = document.querySelector('.popup__wrapper-button-close');
const pageHeader = document.querySelector('.page-header');
const popup = document.querySelector('.popup');
const inputTel = document.querySelector('.popup__wrapper-tel');

pageHeader.classList.remove('page-header--no-js');
navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed');
        navMain.classList.add('nav--opened');
    } else {
        navMain.classList.add('nav--closed');
        navMain.classList.remove('nav--opened');
    }
});

buttonOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup-show');
  inputTel.focus();
});

buttonClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup-show')
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('popup-show')) {
      evt.preventDefault();
      popup.classList.remove('popup-show');
    }
  }
});
