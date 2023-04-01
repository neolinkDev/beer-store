
import { findProduct } from '../store';
import { getStorageItem, setStorageItem, getElement, formatPrice } from '../utils';
import { displayCartDOM } from './display-cart-DOM';
import { openCart } from './toggleCart';


// $ = DOM element variable
const $cartItemCount = getElement('.cart-item-count'),
      $cartItems     = getElement('.cart-items'),
      $cartTotal     = getElement('.cart-total');

// 
let cart = getStorageItem('cart');

//
export const addToCart = ( id ) => {
  
  let item = cart.find( cartItem => cartItem.id == id );
  
  // console.log(item)
  
  if(!item){

    let product = findProduct( id );
     
    product = {...product, amount: 1};
    
    cart = [...cart, product];
    // console.log(cart)

    // add to the DOM
    displayCartDOM( product );
    
  }else{
    // updates
    const amount = increaseAmount( id );
    // console.log(amount)

    const items = [...$cartItems.querySelectorAll('.cart-item-amount')];
    // console.log( items )

    // show the element with the same id
    const newAmount = items.find(item => item.dataset.id == id );
    console.log(newAmount)

    // and update the amount
    newAmount.textContent = amount;
  }
  // item count
  displayCartItemCount()

  // show cart total
  displayCartTotal();

  // cart in localStorage
  setStorageItem( 'cart', cart );

  // console.log(id)
  openCart();
};

//
const displayCartItemCount = () => {

  const amount = cart.reduce(( total, cartItem ) => {
    return total += cartItem.amount
  }, 0)

  $cartItemCount.textContent = amount;
}

//
const displayCartTotal = () => {

  const total = cart.reduce(( total, cartItem ) => {
    return total += cartItem.price * cartItem.amount
  }, 0)

  $cartTotal.textContent = `Total: ${ formatPrice( total ) }`;
}

//
const displayCartItemsDOM = () => {
  
  cart.forEach((cartItem) => {
    displayCartDOM( cartItem );
    // console.log(cartItem)
  });
}

/**
 * 
 * @param {string|number} id 
 * @returns {number}
 */
const increaseAmount = ( id ) => {

  let updateAmount;

  cart = cart.map( cartItem => {
    
    if( cartItem.id == id ){
      updateAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: updateAmount };
    }

    return cartItem;
  })
  return updateAmount;
}

//
const setupCartFunctionality = () => {

}

//
const init = () => {
  // show amount cart items
  displayCartItemCount();

  // show cart total
  displayCartTotal();

  // add cart items to DOM
  displayCartItemsDOM();

  //
  setupCartFunctionality();

}
init();