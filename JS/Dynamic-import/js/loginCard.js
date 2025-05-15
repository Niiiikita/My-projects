import {navigate}  from "./navigate.js"

//Функция getCardEl для данного файла будет переименована в test
// import { getCardEl as test } from "./components.js"

import * as components from "./components.js" // импортирует все сущности из файла

// Создание карточки входа
// ключевое слово default говорит о том, что эта функиия будет экспортирована по умолчанию и в файле navigate можно убрать фигурные скобки
export default function createLoginCard(containerEl) {
    let cardEl = components.getCardEl()

    const titleEl = components.getTiteEl("Вход в аккаунт")

    const formEl = components.getFormEl()

    let loginInputEl = components.getInputEl("text", "email", "E-mail")
    let passwordInputEl = components.getInputEl("password", "password", "Пароль")

    let loginButtonEl = components.getButtonEl("Войти")

    const centerWrapEl = components.getCenterWrapEl()
    const homeLinkEl = components.getLinkEl("На главную")
    const regLinkEl = components.getLinkEl("Регистрация")

    homeLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate()
    })

    regLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate("reg")
    })

    formEl.addEventListener("submit", function (event) {
        event.preventDefault()
        alert("Вход в аккаунт")
    })

    centerWrapEl.append(homeLinkEl, regLinkEl)
    formEl.append(loginInputEl, passwordInputEl, loginButtonEl)

    cardEl.append(titleEl, formEl, centerWrapEl)
    containerEl.append(cardEl)
}