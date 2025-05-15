export default function openLocationCity(e) {
    e.preventDefault();

    const locationCityButton = document.querySelector('.location__city');

    locationCityButton.classList.toggle('location__city--active');

    const cityButtonArr = document.querySelectorAll('.location__sublink');
    
    cityButtonArr.forEach(city => {
        city.addEventListener('click', function (e) {
            e.preventDefault();
            locationCityButton.innerHTML = `
            <span class="location__city-name">${city.textContent}</span>
            <svg class="location__arrow" width="9" height="6" aria-hidden="true">
                <use xlink:href="images/sprite.svg#icon-arrow-bottom"></use>
            </svg>`;
            locationCityButton.classList.remove('location__city--active');
        }, {once: true});
    });
}