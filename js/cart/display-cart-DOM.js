import { formatPrice, getElement } from '../utils';

// $ = DOM element variable
const $cartItems = getElement('.cart-items');

export const displayCartDOM = ( { id, name, price, image, amount } ) => {
  
  const article = document.createElement('article');
  article.classList.add('cart-item');
  article.setAttribute('data-id', id);

  article.innerHTML = `
    <img 
      src="${ image }" 
      class="cart-item-img-cart" 
      alt="${ name }"
    >

    <div>
      <h4 class="cart-item-name">${ name }</h4>
      <p class="cart-item-price">${ formatPrice( price ) }</p>
      <button class="cart-item-remove-btn" data-id="${ id }">eliminar</button>
    </div>

    <div class="">

      <button class="cart-item-increase-btn" data-id="${ id }">
        <ion-icon name="caret-up-sharp"></ion-icon>
      </button>
      
      <p class="cart-item-amount" data-id="${ id }">${ amount }</p>

      <button class="cart-item-decrease-btn" data-id="${ id }">
        <ion-icon name="caret-down-sharp"></ion-icon>
      </button>

    </div>
  `;

  $cartItems.appendChild( article );
}
