export default function tippyClue(moscow, orenburg, saintPetersburg) {
    const tooltipWrapper = document.createElement('div');
    tooltipWrapper.classList.add('tooltip__content');

    tippy('.tooltip__btn', {
        content: tooltipWrapper.innerHTML = `
        <span class="tooltip__text">Наличие товара по городам:</span>
        <ul class="tooltip__list">
            <li class="tooltip__item">
                <span class="tooltip__text">Москва: <span class="tooltip__count">${moscow}</span></span>
            </li>
            <li class="tooltip__item">
                <span class="tooltip__text">Оренбург: <span class="tooltip__count">${orenburg}</span></span>
            </li>
            <li class="tooltip__item">
                <span class="tooltip__text">Санкт-Петербург: <span class="tooltip__count">${saintPetersburg}</span></span>
            </li>
        </ul>`,
        allowHTML: true,
        theme: 'tomato'
    });
}