import Delivery from './Card.js';
import EditDelivery from './EditDelivery.js';

const app = document.querySelector('.app');

const deliveryArr = [
    new EditDelivery('Ольга', 'ул. Вымыслов, д. 12', 8, 'delivered'),
    new EditDelivery('Дмитрий', 'ул. Задачная, д. 7', 3, 'delivery'),
    new EditDelivery('Оля', 'ул. Ткачей, д. 43', 11, 'canceled')
];

// Геттеры для управления данными карточки
let [card1, card2, card3] = deliveryArr;
const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
// card1.name = 'Анастасия';
// card1.address = 'ул. Выдумок д.13';
// card1.distance = 8;
// card1.status = 'delivery';

// card2.name = 'Юля';
// card2.address = 'ул. Угадайки д.20';
// card2.distance = 5;
// card2.status = 'canceled';

// card3.name = 'Михаил';
// card3.address = 'ул. Железнодорожников д.15';
// card3.distance = 20;
// card3.status = 'delivered';

deliveryArr.forEach(card => {
    app.append(card.getElement());
})

app.after(totalDistance);

