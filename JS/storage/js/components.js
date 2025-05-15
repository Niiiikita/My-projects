// Получение элемента карточки
function getCardEl(text) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    return cardEl;
}

// Получение элемента таблицы
function getTable() {
    const tableEl = document.createElement("table");
    tableEl.classList.add('tableWarehouse');
    return tableEl;
}

// Получение элементов строки заголовка таблицы
function getThead() {
    const tHeaderEl = document.createElement("thead");
    const row = document.createElement("tr");
    tHeaderEl.append(row);
    row.innerHTML = `
        <th><button>Название</button></th>
        <th><button>Полка</button></th>
        <th><button>Вес</button></th>
        <th><button>Время хранения</button></th>
        <th></th>`;
    return tHeaderEl;
}

// Получение элемента заголовка
function getTiteEl(text) {
    const titleEl = document.createElement("h1");
    titleEl.textContent = text;
    titleEl.classList.add("main-title");
    return titleEl;
}

// Получение элемента блока для центрирования
function getCenterWrapEl() {
    let buttonsWrapEl = document.createElement("div");
    buttonsWrapEl.classList.add("center-wrap");
    return buttonsWrapEl;
}

// Получение элемента кнопки
function getButtonEl(text) {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = text;
    buttonEl.classList.add("btn");
    return buttonEl;
}

// Получение элемента формы
function getFormEl() {
    const formEl = document.createElement("form");
    formEl.classList.add("form");
    return formEl;
}

// Получение элемента текстового поля
function getInputEl(type, name, placeholder, id) {
    const inputEl = document.createElement("input");
    inputEl.type = type;
    inputEl.name = name;
    inputEl.placeholder = placeholder;
    inputEl.setAttribute('required', 'true');
    inputEl.setAttribute('id', `${id}`);
    return inputEl;
}

// Получение элемента лоадер
function getLoaderEl() {
    const loaderEl = document.createElement('span');
    loaderEl.classList.add('loader');

    return loaderEl;
}

export {
    getCardEl,
    getTiteEl,
    getCenterWrapEl,
    getButtonEl,
    getFormEl,
    getInputEl,
    getLoaderEl,
    getTable,
    getThead
}