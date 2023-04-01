import { getElement } from '../utils';

const $toggleCartBtn = getElement(".toggle-cart"),
      $cartOverlay = getElement(".cart-overlay"),
      $closeCartBtn = getElement(".cart-close"),
      $sidebarOverlay = getElement(".sidebar-overlay");

const bHidden = getElement('body');

$toggleCartBtn.addEventListener("click", () => {

  if ($sidebarOverlay.classList.contains('show')) $sidebarOverlay.classList.remove('show');

  $cartOverlay.classList.add('show');
  bHidden.classList.add('b-hidden');
});

$closeCartBtn.addEventListener('click', () => {

  $cartOverlay.classList.remove('show');
  // $sidebarOverlay.classList.remove('show');
  bHidden.classList.remove('b-hidden');
})

// 
export const openCart = () => {

  if ($sidebarOverlay.classList.contains('show')) $sidebarOverlay.classList.remove('show');

  $cartOverlay.classList.add('show');
  bHidden.classList.add('b-hidden');

  
  
}