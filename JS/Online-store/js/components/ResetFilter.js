import { renderArrProduct } from "./RenderCardAndFilter.js";


export default function resetFilter(e) {
    e.preventDefault();
    const formEl = document.querySelector('.catalog-form');
    const selectEl = document.querySelector('.catalog__sort-select');
    selectEl.value = 'price-min';
    formEl.reset();
    renderArrProduct();
}