// Создаем новый тип карточки на основе старых (наследование)
import Card from './Card.js';

// Создает новый класс на основе класса Card блягодаря ключевому слову extends (наследование)
export default class AmazingCard extends Card {
    constructor(...data) {
        super(...data);
        const [
            title, 
            oldPrice, 
            newPrice,
            imgUrl,
            id
        ] = data
    }

    // Если нужно изменить метод от наследуемого класса, то его можно просто изменить в новом классе просто вызвав его
    getElement() {
        this.liEl = super.getElement()
        this.liEl.classList.remove('catalog__item')
        this.liEl.classList.add('day-products__item')
        this.liEl.classList.add('swiper-slide')

        this.divLi.classList.add('product-card--small');

        return this.liEl

    }

   
}