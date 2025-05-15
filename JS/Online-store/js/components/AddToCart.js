import CardBasket from "./CardBasket.js";

function openCart() {
    const cartEl = document.querySelector('.header__basket');
    cartEl.classList.toggle('basket--active');
}

async function addToCart(e) {
    if (e.target.matches('.btn--icon')) {
        e.preventDefault();

        const cardResponse = await fetch("./data/data.json");
        const cards = await cardResponse.json();
        
        const listEl = document.querySelector('.basket__list');

        cards.forEach(card => {
            if(card.id == e.target.getAttribute('data-id')) {
                listEl.append(new CardBasket(card.name, card.price.new, card.image).getElement());
            }
        });

        const countCart = document.querySelector('.header__user-count');
        countCart.textContent++
        
        if(listEl.querySelector('li')) {
            document.querySelector('.basket__empty-block').style.display = 'none';
        }

        const delBtnArr = Array.from(document.querySelectorAll('.basket__item-close'));

        delBtnArr.forEach(delBtn => {
            delBtn.addEventListener('click', function delBtnClick(e) {
                e.stopImmediatePropagation()
                delBtn.parentElement.remove();
                countCart.textContent-- 

                if(!listEl.querySelector('li')) {
                    document.querySelector('.basket__empty-block').style.display = 'block';
                }
            });
        });
    }
}

export {
    openCart,
    addToCart
}