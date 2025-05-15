import { showPage, generatePaginationButton } from "./RenderCardAndFilter.js";

export default async function sortPrice(e, cards, listEl) {
    e.preventDefault();
    const catalogSort = document.querySelector('.catalog__sort-select').value;

    listEl.innerHTML = '';

    if(catalogSort == 'price-max') {
        cards.sort((a, b) => b.price.new - a.price.new);
        const totalPages = Math.ceil(cards.length / 6);

        showPage(1, cards, listEl)

        generatePaginationButton(totalPages, cards, listEl)

    }   else if(catalogSort == 'price-min') {
        cards.sort((a, b) => a.price.new - b.price.new);

        const totalPages = Math.ceil(cards.length / 6);

        showPage(1, cards, listEl)

        generatePaginationButton(totalPages, cards, listEl)

    }   else {
        cards.sort((a, b) => b.rating - a.rating);

        const totalPages = Math.ceil(cards.length / 6);

        showPage(1, cards, listEl)

        generatePaginationButton(totalPages, cards, listEl)
    }
}