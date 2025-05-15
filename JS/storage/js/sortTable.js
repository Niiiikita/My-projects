import { renderTable } from "./addLocalStorage.js";
    
function sortNameFunc() {    
    const offers = JSON.parse(localStorage.getItem('offers'));
    offers.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem('offers', JSON.stringify(offers));
    const tableBody = document.querySelector('tbody');
    tableBody.remove();
    renderTable();
};

function sortShelfFunc() {
    const offers = JSON.parse(localStorage.getItem('offers'));
    offers.sort((a, b) => a.shelf.localeCompare(b.shelf));
    localStorage.setItem('offers', JSON.stringify(offers));
    const tableBody = document.querySelector('tbody');
    tableBody.remove();
    renderTable();
};

function sortWeightFunc() {
    const offers = JSON.parse(localStorage.getItem('offers'));
    offers.sort((a, b) => a.weight - b.weight)
    localStorage.setItem('offers', JSON.stringify(offers));
    const tableBody = document.querySelector('tbody');
    tableBody.remove();
    renderTable();
};
    
function sortDateFunc() {  
    const offers = JSON.parse(localStorage.getItem('offers'));
    offers.sort((a, b) => a.date.localeCompare(b.date));
    localStorage.setItem('offers', JSON.stringify(offers));
    const tableBody = document.querySelector('tbody');
    tableBody.remove();
    renderTable();
};

export {
    sortNameFunc,
    sortShelfFunc,
    sortWeightFunc,
    sortDateFunc
}