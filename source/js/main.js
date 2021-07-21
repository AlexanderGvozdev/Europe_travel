var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var headerClosed = document.querySelector('.page-header');

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
