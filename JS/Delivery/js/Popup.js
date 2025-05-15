function getPopup() {
// Создаем модальное окно
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.classList.add('popup');
  
  // Создаем коробку в модальном окне
  const popupBox = document.createElement('div');
  popupBox.classList.add('popup__box');

  popupBox.append(getTitle(), getForm());
  popup.append(popupBox, getButtonClose());

  return popup;
}

function getTitle() {
  // Создаем заоголовок в коробке модального окна
  const title = document.createElement('h2');
  title.classList.add('popup__title');
  title.textContent = 'Изменить';

  return title;
}

function getForm() {
  // Создаем форму в коробке модального окна
  const formEl = document.createElement('form');
  formEl.id = 'form';
  formEl.classList.add('popup__form');
  
  // Создаем инпуты в форме
  for (let i = 0; i < 3; i++) {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    if(i == 2) {
      // inputEl.value = card2.distance
      inputEl.setAttribute('type', 'number');
    } 
    formEl.append(inputEl);
  }

  formEl.append(getSelect(), getButton());

  return formEl;
}

function getSelect() {
  // Создаем селект в форме
  const selectEl = document.createElement('select');
  selectEl.setAttribute('name', 'status');
  selectEl.id = 'form__select';
  selectEl.classList.add('form__select');
  for (let i = 0; i < 3; i++) {
    const optionEl = document.createElement('option');
    selectEl.append(optionEl);
    if(i == 1) {
      optionEl.setAttribute('value', 'delivery');
      optionEl.textContent = 'Доставляется';
    } else if(i == 2) {
      optionEl.setAttribute('value', 'delivered');
      optionEl.textContent = 'Доставлен';
    } else {
      optionEl.setAttribute('value', 'canceled');
      optionEl.textContent = 'Отменен';
    }
  }
  return selectEl;
}

function getButton() {
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('form__button')
  buttonEl.textContent = 'Сохранить';

  return buttonEl;
}

function getButtonClose() {
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('closeModal');

  return buttonEl;
}

const popup = getPopup();
export default popup;