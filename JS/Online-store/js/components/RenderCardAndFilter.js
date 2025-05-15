import Card from "./Card.js";
import sortPrice from "./SortPrice.js";
import tippyClue from "./TippyCard.js";

async function renderArrProduct() {
    const cardResponse = await fetch("./data/data.json");
    const cards = await cardResponse.json();

    const listEl = document.querySelector('.catalog__list');
    listEl.innerHTML = '';

    const sortCards = cards.sort((a, b) => a.price.new - b.price.new);
    
    const totalPages = Math.ceil(cards.length / 6);

    showPage(1, sortCards, listEl);

    generatePaginationButton(totalPages, sortCards, listEl);

    document.querySelector('.catalog__sort-select').addEventListener('change', (e) => {
        sortPrice(e, cards, listEl)
    });

    
}

function showPage(pageNumber, cards, listEl) {
    const itemPage = 6;
    
    const startIndex = (pageNumber - 1) * itemPage;
    const endIndex = pageNumber * itemPage;
    
    const newCards = cards.slice(startIndex, endIndex);

    const statusRadio = document.querySelector('.custom-radio__field:checked').value;
    const locationCityButton = document.querySelector('.location__city .location__city-name').textContent;

    newCards.forEach(card => {
        tippyClue(card.availability.moscow, card.availability.orenburg, card.availability.saintPetersburg);
        if(statusRadio == 'all-item') {
            listEl.append(new Card(card.name, card.price.old, card.price.new, card.image, card.id).getElement());
            tippyClue(card.availability.moscow, card.availability.orenburg, card.availability.saintPetersburg);
        }   else {
            if(locationCityButton == 'Москва' && card.availability.moscow != 0) {
                listEl.append(new Card(card.name, card.price.old, card.price.new, card.image, card.id).getElement());

            }   else if(locationCityButton == 'Санкт-Петербург' && card.availability.saintPetersburg != 0) {
                listEl.append(new Card(card.name, card.price.old, card.price.new, card.image, card.id).getElement());

            }   else if(locationCityButton == 'Оренбург' && card.availability.orenburg != 0) {
                listEl.append(new Card(card.name, card.price.old, card.price.new, card.image, card.id).getElement());

            }
        }
    });
}

function generatePaginationButton(totalPages, cards, listEl) {
    const listPagination = document.querySelector('.catalog__pagination');
    listPagination.innerHTML = '';
    
    for (let i = 0; i < totalPages; i++) {
        const liPagination = document.createElement('li');
        liPagination.classList.add('catalog__pagination-item');
        const buttonPagination = document.createElement('button');
        buttonPagination.classList.add('catalog__pagination-link');
        buttonPagination.textContent = i + 1;
        liPagination.append(buttonPagination);
        
        listPagination.append(liPagination);
        
        buttonPagination.addEventListener('click', function (e) {
            e.preventDefault();
            listEl.innerHTML = '';

            showPage(i + 1, cards, listEl)
        });
    }
}

function renderCountFilter() {
    const checkboxEl = Array.from(document.querySelectorAll('.catalog-form .custom-checkbox__field'));
    checkboxEl.forEach(checkbox => {
        getCountFilter(checkbox.id);
    });
}

async function getCountFilter(type) {
    const cardResponse = await fetch("./data/data.json");
    const cards = await cardResponse.json();

    const countCheckbox = document.querySelector(`.custom-checkbox--${type} .custom-checkbox__count`);
    let count = 0;

    cards.forEach(card => {
        if(card.type.includes(`${type}`)) {
            count++;
            countCheckbox.textContent = count;
        }
    });
}

async function getArrFilteredByKeys(e) {
    e.preventDefault();
    const cardResponse = await fetch("./data/data.json");
    const cards = await cardResponse.json();

    // Получаем массив значений всех чекбоксов, которые нажаты
    const values = Array.from(
        document.querySelectorAll('.custom-checkbox__field:checked'),
        (inputCheckbox) => inputCheckbox.value
    );

    let newArr = values.length
    ? cards.filter((n) => values.some((m) => n.type.includes(m)))
    : cards;

    newArr.sort((a, b) => a.price.new - b.price.new);

    const listEl = document.querySelector('.catalog__list');
    listEl.innerHTML = '';

    showPage(1, newArr, listEl);

    const totalPages = Math.ceil(newArr.length / 6);

    generatePaginationButton(totalPages, newArr, listEl);

    document.querySelector('.catalog__sort-select').addEventListener('change', (e) => {
        sortPrice(e, newArr, listEl)
    });

}

export {
    renderArrProduct,
    getArrFilteredByKeys,
    renderCountFilter,
    showPage,
    generatePaginationButton
}