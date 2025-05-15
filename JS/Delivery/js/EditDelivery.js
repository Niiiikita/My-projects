import Delivery from './Card.js';
import popup from './Popup.js';

export default class EditDelivery extends Delivery {
    constructor(name, address, distance, status = 'delivered') {
        super(name, address, distance);
        
        this.status = status;
    }

    getElement() {
        this.cardEl = super.getElement();
        this.buttonEdit = this.getAddButtonEl();
        this.cardEl.append(this.buttonEdit);

        if(this.status == 'delivery') {

            // Проверяем наличие статуса "отмененной" доставки
            if(this.cardEl.classList.contains('card--canceled')) {
                this.cardEl.classList.remove('card--canceled');
            }
            // Добавляем статус "доставляется"
            this.cardEl.classList.add('card--delivery');

        }   else if(this.status == 'canceled') {
            // Проверяем наличие статуса "доставляется"
            if(this.cardEl.classList.contains('card--delivery')) {
                this.cardEl.classList.remove('card--delivery');
            }
            // Добавляем статус "отмененной" доставки
            this.cardEl.classList.add('card--canceled');

            // Если статус "доставлен", то удаляем все статусы
        }   else {
            this.cardEl.classList.remove('card--delivery');
            this.cardEl.classList.remove('card--canceled');
        }

        return this.cardEl;
    }

    getAddButtonEl() {
        const buttonEl = document.createElement('button');
        buttonEl.classList.add('card__button');
        buttonEl.textContent = 'Изменить';

        // Открываем модальное окно
        buttonEl.addEventListener('click', (e) => {
            const overlay = document.querySelector('#overlay');
            overlay.classList.add("show");
            popup.style.display = "block";
            document.body.append(popup);

            const inputEl = document.querySelectorAll('input');
            const selectEl = document.querySelector('select');
            const formBtn = document.querySelector('.form__button');
            const closeBtn = document.querySelector('.closeModal');

            // Кнопка закрытия модального окна
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                overlay.classList.remove("show");
                popup.style.display = "none";
                popup.remove();

            }, {once: true});

            for (let i = 0; i < inputEl.length; i++) {
                if(i == 0) {
                    inputEl[i].value = this.name;
                }   else if(i == 1) {
                    inputEl[i].value = this.address;
                }   else {
                    inputEl[i].value = this.distance;
                }
            }

            // Нажимаем кнопку "Сохранить" в модальном окне
            formBtn.addEventListener('click', (e) => {
                e.preventDefault()
                if(selectEl.value == 'delivery') {

                    // Проверяем наличие статуса "отмененной" доставки
                    if(this.cardEl.classList.contains('card--canceled')) {
                        this.cardEl.classList.remove('card--canceled');
                    }
                    // Добавляем статус "доставляется"
                    this.cardEl.classList.add('card--delivery');
                    this.status = 'delivery';
                    
                }   else if(selectEl.value == 'canceled') {
                    // Проверяем наличие статуса "доставляется"
                    if(this.cardEl.classList.contains('card--delivery')) {
                        this.cardEl.classList.remove('card--delivery');
                    }
                    // Добавляем статус "отмененной" доставки
                    this.cardEl.classList.add('card--canceled');
                    this.status = 'canceled';

                }   else {
                    // Если статус "доставлен", то удаляем все статусы
                    this.cardEl.classList.remove('card--delivery');
                    this.cardEl.classList.remove('card--canceled');
                    // }
                    this.status = 'delivered';
                }

                overlay.classList.remove("show");
                popup.style.display = "none";
                popup.remove();

                // Здесь сущности с нижним подчеркиванием отвечает за то, 
                // чтобы в форме после изменения остались измененные данные
                this._name = inputEl[0].value;
                // Здесь сущности без нижнего подчеркивания (nameEl и т.д.)
                //  отвечают за прорисовку изменненых данных в самой карточке
                this.nameEl.textContent = inputEl[0].value;
                this._address = inputEl[1].value;
                this.addressEl.textContent = inputEl[1].value;
                this.distanceEl.textContent = inputEl[2].value + ' км';
                this._distance = Number(inputEl[2].value);
            }, {once: true})
        });

        return buttonEl;
    }

    static getTotalDistance(deliveryArr) {
        this.divTotalDistance = document.createElement('div');
        this.divTotalDistance.classList.add('divTotalDistance');

        const buttonTotalDistance = document.createElement('button');
        buttonTotalDistance.textContent = 'Общее расстояние';
        buttonTotalDistance.classList.add('buttonTotalDistance')

        const strongEl = document.createElement('strong');

        buttonTotalDistance.addEventListener('click', (e) => {
            e.preventDefault();
            let count = 0;
            deliveryArr.forEach(arr => {
                // Проверяем условие, что статус не имеет значение "undefined" и "canceled"
                if(arr._status !== undefined && arr._status !== 'canceled') {
                    count += arr._distance;
                }
            });
            strongEl.textContent = `Общее расстояние: ${count} км`
        });
        this.divTotalDistance.append(buttonTotalDistance, strongEl);

        return this.divTotalDistance;
    }

    // Добавление статуса (сеттер)
    set status(value) {
        // Нижнее подчеркивание показывает, что _status работает только внутри класса (и это свойство нужно только внутри класса)
        this._status = value;

        // Проверяет создан этот элемент или нет
        if(this.cardEl) {
            if(this.status == 'delivery') {
                if(this.cardEl.classList.contains('card--canceled')) {
                    this.cardEl.classList.remove('card--canceled');
                }
                this.cardEl.classList.add('card--delivery');
                // this.status = 'delivery';

            }   else if(this._status == 'canceled') {
                if(this.cardEl.classList.contains('card--delivery')) {
                    this.cardEl.classList.remove('card--delivery');
                }
                this.cardEl.classList.add('card--canceled');
                // this.status = 'canceled';

            }   else {
                // this.status = 'delivered';
                this.cardEl.classList.remove('card--delivery');
                this.cardEl.classList.remove('card--canceled');
            }
        }
    }

    // Получаем значение статуса (геттер)
    get status() {
        return this._status;
    }
}