import { Dough, Topping, Cookie } from './cookieClasses.js';

const doughs = [
    new Dough('Plain', 'images/dough1.jpg'),
    new Dough('Chocolate Chip', 'images/dough2.jpg')
];

const toppings = [
    new Topping('Chocolate Chips', 'images/topping1.jpg'),
    new Topping('Nuts', 'images/topping2.jpg')
];

const doughSelection = document.querySelector('#doughSelection');
doughs.forEach(dough => {
    const doughElement = dough.createOptionElement();
    doughSelection.appendChild(doughElement);
});

// Display topping options
const toppingSelection = document.querySelector('#toppingSelection');
toppings.forEach(topping => {
    const toppingElement = topping.createOptionElement();
    toppingSelection.appendChild(toppingElement);
});

document.querySelectorAll('input[type="radio"]').forEach(input => {
  input.addEventListener('change', () => {
      const selectedDough = doughs.find(dough => dough.name === document.querySelector('input[name="dough"]:checked')?.value);
      const selectedTopping = toppings.find(topping => topping.name === document.querySelector('input[name="topping"]:checked')?.value);
      if (selectedDough && selectedTopping) {
          const selectedCookie = new Cookie(selectedDough, selectedTopping);
          const cookieImageSrc = selectedCookie.getCookieImage();
          document.querySelector('#cookieImage').src = `${cookieImageSrc}`;
          document.querySelector('#cookieImage').alt = `${selectedDough.name} with ${selectedTopping.name} Topping`;
      }
  });
});