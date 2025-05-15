export default class Card {

    _title = '';
    _oldPrice = 0;
    _newPrice = 0;
    // Если параметр не передается в классе, то будет подставлена эта картинка
    _imgUrl = './images/empty.webp';
    _addCount = 0;
    constructor(...data) {
        const [
            title, 
            oldPrice, 
            newPrice,
            imgUrl,
            id,
        ] = data
        // До любой сущности внутри класса можно добраться только с помощью this
        this.title = title;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        this.id = id;

        // Проверка передается ли параметр imgUrl 
        if(imgUrl) {
            this.imgUrl = imgUrl;
        }
    }
    
    // Внутри класса ключевое слово function писать не нужно
    getElement() {
        // Создаем карточку
        this.liEl = document.createElement('li');
        this.liEl.classList.add('catalog__item');

        // Создаем обертку для всей карточки
        this.divLi = document.createElement('div');
        this.divLi.classList.add('product-card');

        // Создаем обертку для визуальной части карточки
        this.divVisual = document.createElement('div'); 
        this.divVisual.classList.add('product-card__visual');
        
        // Создаем обертку для контентной части карточки
        this.divInfo = document.createElement('div'); 
        this.divInfo.classList.add('product-card__info');
        
        // Создаем картинку карточки
        this.imgEl = document.createElement('img');
        this.imgEl.classList.add('product-card__img');
        this.imgEl.src = this.imgUrl;
        this.imgEl.width = 290;
        this.imgEl.height = 436;
        this.imgEl.setAttribute('alt', 'Изображение товара');

        // Создаем обертку для двух кнопок "В корзину" и "Подробнее"
        this.divMore = document.createElement('div');
        this.divMore.classList.add('product-card__more');

        // Создаем две кнопки "В корзину" и "Подробнее"
        this.cartLink = document.createElement('a');
        this.cartLink.setAttribute('href', '#');
        this.cartLink.setAttribute('data-id', `${this.id}`);
        this.cartLink.classList.add('product-card__link');
        this.cartLink.classList.add('btn');
        this.cartLink.classList.add('btn--icon');

        this.cartLink.innerHTML = `
        <span class='btn__text'>В корзину</span> 
        <svg width="24" height="24" aria-hidden="true">
            <use xlink:href="images/sprite.svg#icon-basket"></use>
        </svg>`

        this.moreLink = document.createElement('a');
        this.moreLink.setAttribute('href', '#')
        this.moreLink.classList.add('product-card__link');
        this.moreLink.classList.add('btn');
        this.moreLink.classList.add('btn--secondary');
        this.spanLinkMoreText = document.createElement('span');
        this.spanLinkMoreText.classList.add('btn__text')
        this.spanLinkMoreText.textContent = 'Подробнее';

        this.moreLink.append(this.spanLinkMoreText);

        this.divMore.append(this.cartLink, this.moreLink)

        // Создаем заголовок карточки
        this.h2El = document.createElement('h2');
        this.h2El.classList.add('product-card__title');
        this.h2El.textContent = this.title;
        
        // Создаем обертку для старой цены и заполняем ее
        this.oldPriceEl = document.createElement('span');
        this.oldPriceEl.classList.add('product-card__old');

        this.oldPriceNumber = document.createElement('span');
        this.oldPriceNumber.classList.add('product-card__old-number');
        this.oldPriceNumber.textContent = this.oldPrice.toLocaleString('ru-RU');
        this.oldPriceCurrency = document.createElement('span');
        this.oldPriceCurrency.classList.add('product-card__old-add');
        this.oldPriceCurrency.textContent = '₽';

        this.oldPriceEl.append(this.oldPriceNumber, this.oldPriceCurrency);

        // Создаем обертку для новой цены и заполняем ее
        this.newPriceEl = document.createElement('span');
        this.newPriceEl.classList.add('product-card__price');

        this.newPriceNumber = document.createElement('span');
        this.newPriceNumber.classList.add('product-card__price-number');
        this.newPriceNumber.textContent = this.newPrice.toLocaleString('ru-RU');
        this.newPriceCurrency = document.createElement('span');
        this.newPriceCurrency.classList.add('product-card__price-add');
        this.newPriceCurrency.textContent = '₽';

        this.divToolTip = this.getButtonTooltip();

        this.newPriceEl.append(this.newPriceNumber, this.newPriceCurrency);

        this.divInfo.append(this.h2El, this.oldPriceEl, this.newPriceEl, this.divToolTip);

        this.divVisual.append(this.imgEl, this.divMore);

        this.divLi.append(this.divVisual, this.divInfo);

        this.liEl.append(this.divLi);

        return this.liEl;
    }

    getButtonTooltip() {
        // Создаем обертку для тултипа
        this.divToolTip = document.createElement('div');
        this.divToolTip.classList.add('product-card__tooltip');
        this.divToolTip.classList.add('tooltip');

        // Создаем кнопку тултипа
        this.toolTipButton = document.createElement('button');
        this.toolTipButton.classList.add('tooltip__btn');
        this.toolTipButton.innerHTML = `
        <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
            <use xlink:href="images/sprite.svg#icon-i"></use>
        </svg>`;

        this.divToolTip.append(this.toolTipButton);

        return this.divToolTip;
    }

    // Получает товары из корзины (геттер)
    get addCount() {
        return this._addCount;
    }

    set title(value) {
        this._title = value;

        if(this.h2El) {
            this.h2El.textContent = this._title;
        }
    }

    get title() {
        return this._title;
    }

    set oldPrice(value) {
        this._oldPrice = value;

        if(this.oldPriceNumber) {
            this.oldPriceNumber.textContent = this._oldPrice;
        }
    }

    get oldPrice() {
        return this._oldPrice;
    }

    set newPrice(value) {
        this._newPrice = value;

        if(this.newPriceNumber) {
            this.newPriceNumber.textContent = this._newPrice;
        }
    }

    get newPrice() {
        return this._newPrice;
    }

    set imgUrl(value) {
        this._imgUrl = value;

        if(this.imgEl) {
            this.imgEl.src = this._imgUrl;
        }
    }

    get imgUrl() {
        return this._imgUrl;
    }
}