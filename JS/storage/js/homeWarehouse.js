import {navigate}  from "./navigate.js";
import {sortNameFunc, sortShelfFunc, sortWeightFunc, sortDateFunc} from "./sortTable.js";
import * as components from "./components.js"; // Импортирует все сущности из файла
import { renderTable } from "./addLocalStorage.js";

// Создание главной карточки
// Ключевое слово default говорит о том, что эта функиия будет экспортирована по умолчанию
//  и в файле navigate можно убрать фигурные скобки 
export default function createHomeWarehouse(containerEl) {
    const cardEl = components.getCardEl();
    const cardEl2 = components.getCardEl();

    const titleEl = components.getTiteEl("Склад");

    const addRecordButton = components.getButtonEl("Добавить запись");

    const tableEl = components.getTable();
    
    const thEl = components.getThead();

    addRecordButton.addEventListener("click", function () {
        navigate("addRecord");
    })

    containerEl.append(cardEl, cardEl2);
    cardEl.append(titleEl, addRecordButton);
    cardEl2.append(tableEl)
    tableEl.append(thEl);

    renderTable();

    const [sortName, sortShelf, sortWeight, sortDate] = document.querySelectorAll('.tableWarehouse tr button');

    sortName.addEventListener('click', sortNameFunc);
    sortShelf.addEventListener('click', sortShelfFunc);
    sortWeight.addEventListener('click', sortWeightFunc);
    sortDate.addEventListener('click', sortDateFunc);
}