// Создаем новый тип карточки на основе старых (наследование)
import Card from './Card.js';

// Создает новый класс на основе класса Card блягодаря ключевому слову extends (наследование)
export default class AmazingCard extends Card {
    constructor(title, price, imgUrl, maxCount = 100) {
        super(title, price, imgUrl);

        this.maxCount = maxCount;
    }

    // Если нужно изменить метод от наследуемого класса, то его можно просто изменить в новом классе просто вызвав его
    getAddButtonEl() {
        const addButtonWrapEl = document.createElement('div');
        addButtonWrapEl.classList.add('card__add-wrap');

        this.addButtonEl = super.getAddButtonEl();

        // Создаем обертку для кнопок минус, плюс и счетчика
        this.addCounterWrapEl = document.createElement('div');
        this.addCounterWrapEl.classList.add('card__add-counter-wrap');

        // Добавление кнопки минус
        this.minusButtonEl = document.createElement('button');
        this.minusButtonEl.classList.add('card__add-counter-btn');
        this.minusButtonEl.textContent = '-';

        // Добавляем событие на кнопку плюс, а именно уменьшаем счетчик
        this.minusButtonEl.addEventListener('click', () => {
            this.addCount--
        });

        // Блок между кнопками плюс и минус (счетчик)
        this.addCounterEl = document.createElement('div');
        this.addCounterEl.classList.add('card__add-counter');
        this.addCounterEl.textContent = this.addCount;

        // Добавление кнопки плюс
        this.plusButtonEl = document.createElement('button');
        this.plusButtonEl.classList.add('card__add-counter-btn');
        this.plusButtonEl.textContent = '+';

        // Добавляем событие на кнопку плюс, а именно увеличиваем счетчик
        this.plusButtonEl.addEventListener('click', () => {
            // Запускается сеттер
            this.addCount++
        });

        this.addCounterWrapEl.append(this.minusButtonEl, this.addCounterEl, this.plusButtonEl);

        addButtonWrapEl.append(this.addButtonEl, this.addCounterWrapEl);
        return addButtonWrapEl;
    }

    // Добавление товаров в корзину (сеттер)
    set addCount(value) {
        // Нижнее подчеркивание показывает, что addCount работает только внутри класса (и это свойство нужно только внутри класса)
        this._addCount = value;

        // Проверяет создан этот элемент ил нет
        if(this.addCounterWrapEl) {
            if(this._addCount > 0) {
                this.addButtonEl.classList.add('added');
                this.addCounterEl.textContent = this._addCount;

                // Условие, которое проверяет достигнуто ли максимальное количество счетчика,
                //  если да, то делает кнопку не активной
                if(this.addCount >= this.maxCount) {
                    this.plusButtonEl.disabled = true;
                }   else {
                    this.plusButtonEl.disabled = false;
                }

            }   else {
                this.addButtonEl.classList.remove('added');
                this.addCounterEl.textContent = 0;
            }
        }
    }

    // Получает товары из корзины (геттер)
    get addCount() {
        return this._addCount;
    }
}