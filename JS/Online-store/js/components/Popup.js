function getPopup() {
// Создаем модальное окно
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.classList.add('popup');
  
  // Создаем коробку в модальном окне
  const popupBox = document.createElement('div');
  popupBox.classList.add('popup__box');

  popupBox.append(getSvg(), getTitle(), getContent());
  popup.append(popupBox, getButtonClose());

  return popup;
}

function getSvg() {
  const imgEl = document.createElement('img');
  imgEl.classList.add('popup__icon')
  imgEl.src = './images/Vector.svg'

  return imgEl;
}

function getTitle() {
  // Создаем заоголовок в коробке модального окна
  const title = document.createElement('h2');
  title.classList.add('popup__title');
  title.textContent = 'Благодарим за обращение!';

  return title;
}

function getContent() {
  // Создаем Абзац в коробке модального окна
  const pEl = document.createElement('p');
  pEl.classList.add('popup__content');
  pEl.textContent = 'Мы получили вашу заявку и свяжемся с вами в ближайшее время';

  return pEl;
}

// Создаем крестик для закрытия модального окна
function getButtonClose() {
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('closeModal');

  return buttonEl;
}

const popup = getPopup();
export default popup;