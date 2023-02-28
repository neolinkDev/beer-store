import { getElement } from '../utils';

const $toggleCartBtn = getElement(".toggle-cart"),
      $cartOverlay = getElement(".cart-overlay"),
      $closeCartBtn = getElement(".cart-close");

const bHidden = getElement('body');



$toggleCartBtn.addEventListener("click", () => {

  $cartOverlay.classList.add('show');
  bHidden.classList.add('b-hidden');
});

$closeCartBtn.addEventListener('click', () => {

  $cartOverlay.classList.remove('show');
  bHidden.classList.remove('b-hidden');
})

// 
export const openCart = () => {
  $cartOverlay.classList.add('show');
  bHidden.classList.add('b-hidden');
  
}