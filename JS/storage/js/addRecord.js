import { handleFormSubmit } from "./addLocalStorage.js";
import * as components from "./components.js"; // импортирует все сущности из файла

export default function addRecord(containerEl) {
    const titleEl = components.getTiteEl("Добавить запись");

    const centerWrapEl = components.getCenterWrapEl();

    const formEl = components.getFormEl();

    const inputEls = [
        components.getInputEl('text', 'items', 'Название', 'name'),
        components.getInputEl('text', 'shelf', 'Полка', 'shelf'),
        components.getInputEl('number', 'weight', 'Вес', 'weight'),
        components.getInputEl('date', 'date', '', 'date')];

    const addRecordButton = components.getButtonEl("Добавить запись");
    addRecordButton.setAttribute('type', 'submit')

    containerEl.append(centerWrapEl);
    centerWrapEl.append(titleEl, formEl);
    for (let i = 0; i < inputEls.length; i++) {
        formEl.append(inputEls[i]);
    }
    formEl.append(addRecordButton);

    document.querySelector('.form').addEventListener('submit', handleFormSubmit);
}