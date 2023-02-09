import { getElement } from '../utils';

const $toggleCartBtn = getElement(".toggle-cart"),
      $cartOverlay = getElement(".cart-overlay"),
      $closeCartBtn = getElement(".cart-close");

$toggleCartBtn.addEventListener("click", () => {

  $cartOverlay.classList.add('show');
});

$closeCartBtn.addEventListener('click', () => {

  $cartOverlay.classList.remove('show');
})

//
export const openCart = () => {
  $cartOverlay.classList.add('show');
}