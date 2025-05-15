export default function activeAccordion() {
    let accordionEl = Array.from(document.querySelectorAll(".accordion__btn"));

    accordionEl.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Проверяем открыт ли аккордион, по которому тыкнули. Если да - закрываем.
            // Если закрыт, то закрываем все аккордионы и открывает тот, по которому тыкнули
            if (e.target.classList.contains('accordion__btn--active')) {
                e.target.classList.remove('accordion__btn--active');
                return;
            }
            accordionEl.forEach(accordionButton => accordionButton.classList.remove('accordion__btn--active'));
            e.target.classList.add('accordion__btn--active');
        });
    });
}