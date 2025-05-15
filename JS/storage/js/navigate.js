import { getLoaderEl } from "./components.js"

// Отрисовка страницы "Склад"
// Назвать функцию navigate
export async function navigate(cardName) {
    const appEl = document.getElementById("app")
    appEl.innerHTML = ''
    
    // Добавление анимации загрузки на сайт
    const loaderEl = getLoaderEl() 
    appEl.append(loaderEl)

    switch (cardName) {
        case "addRecord":
            const addRecord = await import("./addRecord.js") // Позволяет динамически импортировать модуль, то есть функция из этого модуля будет загружена только, когда пользователь нажмет на кнопку войти
            addRecord.default(appEl)
            loaderEl.remove() // Удаление анимации после загрузки
            break
        default:
            const homeWarehouse = await import("./homeWarehouse.js") // Позволяет динамически импортировать модуль, то есть функция из этого модуля будет загружена только, когда пользователь нажмет на кнопку войти
            homeWarehouse.default(appEl)
            loaderEl.remove() // Удаление анимации после загрузки
    }
}