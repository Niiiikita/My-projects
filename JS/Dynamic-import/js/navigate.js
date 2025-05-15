import { getLoaderEl } from "./components.js"

// Отрисовка карточки
// Назвать функцию navigate
export async function navigate(cardName) {
    const appEl = document.getElementById("app")
    appEl.innerHTML = ''
    
    // Добавление анимации загрузки на сайт
    const loaderEl = getLoaderEl() 
    appEl.append(loaderEl)

    switch (cardName) {
        case "login":
            const loginCard = await import("./loginCard.js") // Позволяет динамически импортировать модуль, то есть функция из этого модуля будет загружена только, когда пользователь нажмет на кнопку войти
            loginCard.default(appEl)
            loaderEl.remove() // Удаление анимации после загрузки
            break
        case "reg":
            const regCard = await import("./regCard.js") // Позволяет динамически импортировать модуль, то есть функция из этого модуля будет загружена только, когда пользователь нажмет на кнопку войти
            regCard.default(appEl)
            loaderEl.remove() // Удаление анимации после загрузки
            break
        default:
            const homeCard = await import("./homeCard.js") // Позволяет динамически импортировать модуль, то есть функция из этого модуля будет загружена только, когда пользователь нажмет на кнопку войти
            homeCard.default(appEl)
            loaderEl.remove() // Удаление анимации после загрузки
    }
}