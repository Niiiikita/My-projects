import {navigate}  from "./navigate.js"
import * as components from "./components.js" // импортирует все сущности из файла

// Создание карточки регистрации
// ключевое слово default говорит о том, что эта функиия будет экспортирована по умолчанию и в файле navigate можно убрать фигурные скобки
export default function createRegCard(containerEl) {
    let cardEl = components.getCardEl()

    const titleEl = components.getTiteEl("Регистрация")

    const formEl = components.getFormEl()

    let loginInputEl = components.getInputEl("text", "email", "E-mail")
    let passwordInputEl = components.getInputEl("password", "password", "Пароль")
    let nameInputEl = components.getInputEl("text", "name", "Имя")
    let surnameInputEl = components.getInputEl("text", "surname", "Фамилия")

    let regButtonEl = components.getButtonEl("Зарегистрироваться")

    const centerWrapEl = components.getCenterWrapEl()
    const homeLinkEl = components.getLinkEl("На главную")
    const loginLinkEl = components.getLinkEl("Вход")

    homeLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate()
    })

    loginLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate("login")
    })

    formEl.addEventListener("submit", function (event) {
        event.preventDefault()
        alert("Регистрация")
    })

    centerWrapEl.append(homeLinkEl, loginLinkEl)
    formEl.append(loginInputEl, passwordInputEl, nameInputEl, surnameInputEl, regButtonEl)

    cardEl.append(titleEl, formEl, centerWrapEl)
    containerEl.append(cardEl)
}