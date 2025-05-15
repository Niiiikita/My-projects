const buttonEl = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header');
const mainClick = document.querySelector('main');

buttonEl.addEventListener('click', function (e) {
    e.preventDefault();
    headerBurger.classList.toggle('header--burger');
});

mainClick.addEventListener('click', function () {
    if(headerBurger.classList.contains('header--burger')) {
        headerBurger.classList.remove('header--burger')
    }
});

document.querySelector('.hero-bottom').addEventListener('click', function (e) {
    e.preventDefault();
    if(e.target && e.target.matches('.hero-bottom__button')) {
        if(e.target.parentNode.nextElementSibling == null) {
            e.target.parentNode.previousElementSibling.childNodes[1].classList.add('hero-bottom__button--disable');
            e.target.classList.remove('hero-bottom__button--disable');
            document.querySelector('.gallery').classList.add('gallery--grid');
        } else if(e.target.classList.contains('hero-bottom__button--disable')) {
            e.target.classList.remove('hero-bottom__button--disable');
            e.target.parentNode.nextElementSibling.childNodes[1].classList.add('hero-bottom__button--disable');
            document.querySelector('.gallery').classList.remove('gallery--grid');
        }
    }
});