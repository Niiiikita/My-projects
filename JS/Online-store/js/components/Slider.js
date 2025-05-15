import AmazingCard from "./AmazingCard.js";
import tippyClue from "./TippyCard.js";

export default async function swiper() {
    const cardResponse = await fetch("./data/data.json");
    const cards = await cardResponse.json();

    const listEl = document.querySelector('.day-products__list');
    listEl.innerHTML = '';

    settingSlider()

    cards.forEach(card => {
        if(card.goodsOfDay) {
            tippyClue(card.availability.moscow, card.availability.orenburg, card.availability.saintPetersburg);
            listEl.append(new AmazingCard(card.name, card.price.old, card.price.new, card.image, card.id).getElement());
        }
    });
}

function settingSlider() {
    const swiper = new Swiper('.swiper', {
        // Настройки слайдера
        direction: 'horizontal',
        loop: false,
        
        slidesPerView: 4, // Количество отображаемых слайдов
        // spaceBetween: 10, // Расстояние между слайдами
    
        // Настройки пролистывания на нажитие стрелки
        navigation: {
            nextEl: '.day-products__navigation-btn--next',
            prevEl: '.day-products__navigation-btn--prev',
          },
      });
}