import openAndCloseBurgerButton from "./components/BurgerButton.js";
import openLocationCity from "./components/LocationCity.js";
import { renderArrProduct, getArrFilteredByKeys, renderCountFilter } from "./components/RenderCardAndFilter.js";
import resetFilter from "./components/resetFilter.js";
import swiper from "./components/Slider.js";
import activeAccordion from "./components/Accordion.js";
import validationForm from "./components/Validation.js";
import { addToCart, openCart } from "./components/AddToCart.js";


window.addEventListener('DOMContentLoaded', () => {

    renderArrProduct();

    renderCountFilter();

    swiper();

    activeAccordion();

    validationForm();

    document.body.addEventListener('click', addToCart);

    document.querySelector('.header__user-btn').addEventListener('click', openCart);

    document.querySelector('.catalog-form').addEventListener('change', getArrFilteredByKeys);
   
    document.querySelector('.header__catalog-btn').addEventListener('click', openAndCloseBurgerButton);
  
    document.querySelector('.location__city').addEventListener('click', openLocationCity);

    document.querySelector('.catalog-form__reset').addEventListener('click', resetFilter);
});
