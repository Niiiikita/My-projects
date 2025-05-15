export default class Delivery {

    _name = '';
    _address = '';
    _distance = 0;


    constructor(name, address, distance) {
        this.name = name;
        this.address = address;
        this.distance = distance;
    }

    getElement() {
        // Создаем карточку
        this.cardEl = document.createElement('div');
        this.cardEl.classList.add('card');

        // Создаем имя покупателя
        this.divName = document.createElement('div');
        this.divName.classList.add('card__wrap');
        this.pEl = document.createElement('p');
        this.pEl.classList.add('card__paragraph');
        this.pEl.textContent = 'Имя';
        this.nameEl = document.createElement('strong');
        this.nameEl.classList.add('card__strong');
        this.nameEl.textContent = `${this.name}`;
        this.cardEl.append(this.divName);
        this.divName.append(this.pEl, this.nameEl);

        // Создаем адрес покупателя
        this.divAddress = document.createElement('div');
        this.divAddress.classList.add('card__wrap');
        this.pEl = document.createElement('p');
        this.pEl.classList.add('card__paragraph');
        this.pEl.textContent = 'Адрес';
        this.addressEl = document.createElement('strong');
        this.addressEl.classList.add('card__strong');
        this.addressEl.textContent = `${this.address}`;
        this.cardEl.append(this.divAddress);
        this.divAddress.append(this.pEl, this.addressEl);

        // Создаем расстояние до покупателя
        this.divDistance = document.createElement('div');
        this.divDistance.classList.add('card__wrap');
        this.pEl = document.createElement('p');
        this.pEl.classList.add('card__paragraph');
        this.pEl.textContent = 'Расстояние';
        this.distanceEl = document.createElement('strong');
        this.distanceEl.classList.add('card__strong');
        this.distanceEl.textContent = `${this.distance} км`;
        this.cardEl.append(this.divDistance);
        this.divDistance.append(this.pEl, this.distanceEl);

        return this.cardEl;
    }

    set name(value) {
        this._name = value;

        if(this.nameEl) {
            this.nameEl.textContent = this._name;
        }
    }

    get name() {
        return this._name;
    }

    set address(value) {
        this._address = value;

        if(this.addressEl) {
            this.addressEl.textContent = this._address;
        }
    }

    get address() {
        return this._address;
    }

    set distance(value) {
        this._distance = value;

        if(this.distanceEl) {
            this.distanceEl.textContent = this._distance + ' км';
        }
    }

    get distance() {
        return this._distance;
    }
}