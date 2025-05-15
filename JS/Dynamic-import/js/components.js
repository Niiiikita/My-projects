// Получение элемента карточки
function getCardEl(text) {
    const cardEl = document.createElement("div")
    cardEl.classList.add("card")
    return cardEl
}

// Получение элемента заголовка
function getTiteEl(text) {
    const titleEl = document.createElement("h1")
    titleEl.textContent = text
    titleEl.classList.add("main-title")
    return titleEl
}

// Получение элемента описания
function getDescEl(text) {
    const descEl = document.createElement("p")
    descEl.textContent = text
    descEl.classList.add("desc")

    return descEl
}

// Получение элемента блока для центрирования
function getCenterWrapEl() {
    let buttonsWrapEl = document.createElement("div")
    buttonsWrapEl.classList.add("center-wrap")
    return buttonsWrapEl
}

// Получение элемента кнопки
function getButtonEl(text) {
    const buttonEl = document.createElement("button")
    buttonEl.textContent = text
    buttonEl.classList.add("btn")
    return buttonEl
}

// Получение элемента формы
function getFormEl() {
    const formEl = document.createElement("form")
    formEl.classList.add("form")
    return formEl
}

// Получение элемента текстового поля
function getInputEl(type, name, placeholder) {
    const inputEl = document.createElement("input")
    inputEl.type = type
    inputEl.name = name
    inputEl.placeholder = placeholder
    inputEl.classList.add("text-field")
    return inputEl
}

// Получение элемента ссылки
function getLinkEl(text, href) {
    const linkEl = document.createElement("a")
    linkEl.textContent = text
    linkEl.href = href
    linkEl.classList.add("link")
    return linkEl
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
    getDescEl,
    getCenterWrapEl,
    getButtonEl,
    getFormEl,
    getInputEl,
    getLinkEl,
    getLoaderEl
}