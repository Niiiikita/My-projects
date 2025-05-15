// Шаблон для класса
export default class Card {

    // Если параметр не передается в классе, то будет подставлена эта картинка
    _title = '';
    _price = 0;
    _imgUrl = './img/notImg.jpg';
    _addCount = 0;
    
    constructor(title, price, imgUrl) {
        // До любой сущности внутри класса можно добраться только с помощью this
        this.title = title;
        this.price = price;

        // Проверка передается ли параметр imgUrl 
        if(imgUrl) {
            this.imgUrl = imgUrl;
        }
    }
    
    // Внутри класса ключевое слово function писать не нужно
    getElement() {
        // Создаем карточку
        this.cardEl = document.createElement('div');
        this.cardEl.classList.add('card');

        // Создаем картинку внутри карточки
        this.imgEl = document.createElement('img');
        this.imgEl.classList.add('card__img');
        this.imgEl.src = this.imgUrl;

        // Создаем заголовок внутри карточки
        this.titleEl = document.createElement('h2');
        this.titleEl.classList.add('card__title');
        this.titleEl.textContent = this.title;

        // Создаем стоимость внутри карточки
        this.priceEl = document.createElement('strong');
        this.priceEl.classList.add('card__price');
        this.priceEl.textContent = this.price;

        // Поскольку создание кнопки было в отдельном методе getButtonEl, 
        // то чтобы кнопка появилась нужно сущности this.addButton просвоить 
        // возвращаемое значение функции getButtonEl
        this.addButtonEl = this.getAddButtonEl();

        this.cardEl.append(this.imgEl, this.titleEl, this.priceEl, this.addButtonEl);
        return this.cardEl;
    }

    // Создаем кнопку отдельным методом и возвращаем значение
    getAddButtonEl() {
        // Создаем кнопку внутри карточки
        const addButtonEl = document.createElement('button');
        addButtonEl.classList.add('card__add-btn');
        addButtonEl.textContent = 'В корзину';

        addButtonEl.addEventListener('click', () => {
            // addButtonEl.classList.toggle('added');

            if(this.addCount > 0) {
                this.addCount = 0
            }   else {
                this.addCount = 1
            }
            // if(addButtonEl.classList.contains('added')) {
            //     addButtonEl.textContent = 'Удалить из корзины';
            // }   else {
            //     addButtonEl.textContent = 'В корзину';
            // }
        });

        return addButtonEl;
    }

    // Добавление товаров в корзину (сеттер)
    set addCount(value) {
        // Нижнее подчеркивание показывает, что addCount работает только внутри класса (и это свойство нужно только внутри класса)
        this._addCount = value;

        // Проверяет создан этот элемент ил нет
        if(this.addButtonEl) {
            if(this._addCount > 0) {
                this.addButtonEl.classList.add('added');
                this.addButtonEl.textContent = `Удалить ${this._addCount} товаров`;
            }   else {
                this.addButtonEl.classList.remove('added');
                this.addButtonEl.textContent = 'В корзину';
            }
        }
    }

    // Получает товары из корзины (геттер)
    get addCount() {
        return this._addCount;
    }

    set title(value) {
        this._title = value;

        if(this.titleEl) {
            this.titleEl.textContent = this._title;
        }
    }

    get title() {
        return this._title;
    }

    set price(value) {
        this._price = value;

        if(this.priceEl) {
            this.priceEl.textContent = this._price;
        }
    }

    get price() {
        return this._price;
    }

    set imgUrl(value) {
        this._imgUrl = value;

        if(this.imgEl) {
            this.priceEl.src = this._imgUrl;
        }
    }

    get imgUrl() {
        return this._imgUrl;
    }
}