export default class CardBasket {   
    // Если параметр не передается в классе, то будет подставлена эта картинка
    _imgUrl = './images/empty.webp';
    _addCount = 0;
    constructor(...data) {
        const [
            title, 
            newPrice,
            imgUrl
        ] = data
        // До любой сущности внутри класса можно добраться только с помощью this
        this.title = title;
        this.newPrice = newPrice;

        // Проверка передается ли параметр imgUrl 
        if(imgUrl) {
            this.imgUrl = imgUrl;
        }
    }
    
    // Внутри класса ключевое слово function писать не нужно
    getElement() {
        // Создаем карточку
        this.liEl = document.createElement('li');
        this.liEl.classList.add('basket__item');

        this.divImg = document.createElement('div');
        this.divImg.classList.add('basket__img');

        this.imgEl = document.createElement('img');
        this.imgEl.width = 60;
        this.imgEl.height = 60;
        this.imgEl.src = this.imgUrl;

        this.spanName = document.createElement('span');
        this.spanName.classList.add('basket__name');
        this.spanName.textContent = this.title;

        this.spanPrice = document.createElement('span');
        this.spanPrice.classList.add('basket__price');
        this.spanPrice.textContent = this.newPrice.toLocaleString('ru-RU') + ' ₽';

        this.buttonEl = document.createElement('button');
        this.buttonEl.classList.add('basket__item-close');
        this.buttonEl.innerHTML = `
            <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
                <use xlink:href="images/sprite.svg#icon-close"></use>
            </svg>`

        this.divImg.append(this.imgEl);

        this.liEl.append(this.divImg, this.spanName, this.spanPrice, this.buttonEl);

        return this.liEl;
    }
}