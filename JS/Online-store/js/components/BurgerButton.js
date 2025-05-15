export default function openAndCloseBurgerButton(e) {
    e.preventDefault();
    const headerCatalog = document.querySelector('.header__catalog');
    
    headerCatalog.classList.add('main-menu--active');

    const closeBurgerButton = document.querySelector('.main-menu__close');

    closeBurgerButton.addEventListener('click', function (e) {
        e.preventDefault()
        headerCatalog.classList.remove('main-menu--active')
    }, {once: true});
}