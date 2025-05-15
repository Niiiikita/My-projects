import Card from './Card.js';
import AmazingCard from './AmazingCard.js';

const app = document.querySelector('#app');

// Объявление нового класса (экземпляра класса)
let card1 = new Card('Смартфон', 20000, './img/product_1.jpg');
// Добавление карточки в DOM дерево
app.append(card1.getElement());
// card1.priceEl.textContent = 100

// Запускает метотд, созданный в Card.js (сеттер) (нужно для управления параметрами карточки)
// card1.addCount = 3;
// card1.title = 'Тест';
// card1.price = 100;

let card2 = new Card('Наушники', 2500, './img/product_2.jpeg');
app.append(card2.getElement());

let card3 = new AmazingCard('Зарядка', 540, './img/product_3.jpeg', 5);
app.append(card3.getElement());
