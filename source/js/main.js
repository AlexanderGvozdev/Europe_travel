const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const headerClosed = document.querySelector('.page-header');
const buttonOpen = document.querySelector('.countries-desc__item-wrapper-button');
const buttonClose = document.querySelector('.popup__wrapper-button-close');
const popup = document.querySelector('.popup');
const inputTel = document.querySelector('.popup__wrapper-tel');

navMain.classList.remove('nav--nojs');
headerClosed.classList.add('page-header--closed');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed');
        headerClosed.classList.remove('page-header--closed');
        navMain.classList.add('nav--opened');
    } else {
        navMain.classList.add('nav--closed');
        headerClosed.classList.add('page-header--closed');
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
