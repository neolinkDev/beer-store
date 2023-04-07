
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

/**
 * 
 * @param {string} id 
 */
export const addToCart = ( id ) => {
  
  let item = cart.find( cartItem => cartItem.id == id );
  
  // console.log(item)
  
  if(!item){ 

    let product = findProduct( id );
     
    product = {...product, amount: 1};
    
    cart = [...cart, product];

    // add to the DOM
    displayCartDOM( product );
    
  }else{
    // updates
    const amount = increaseAmount( id );
    // console.log(amount)

    const items = [...$cartItems.querySelectorAll('.cart-item-amount')];
    // console.log( items )

    // show the element with the same id
    const newAmount = items.find( item => item.dataset.id == id );
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
 * remove item from the cart
 * @param {string} id 
 */
const removeItem = ( id ) => {
  
  cart = cart.filter( cartItem => cartItem.id != id )
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
/**
 * 
 * @param {string|number} id 
 * @returns {number}
 */
const decreaseAmount = ( id ) => {

  let updateAmount;
  

  cart = cart.map( cartItem => {
    
    if( cartItem.id == id ){
      updateAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: updateAmount };
    }

    return cartItem;
  })
  return updateAmount;
}

//
const setupCartFunctionality = () => {
  
  $cartItems.addEventListener('click', ({ target }) => {

    const element  = target;
    const parent   = target.parentElement;
    const id       = target.dataset.id;
    const parentID = target.parentElement.dataset.id;
    

    // button remove
    if(element.classList.contains('cart-item-remove-btn')){
      
      removeItem( id );

      // this remove the item from the DOM
      parent.parentElement.remove();
    }

    if(parent.closest('.cart-item-increase-btn')){
      // console.log('click')
      // console.log('parentID')
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;

    }
    if(parent.closest('.cart-item-decrease-btn')){
      // console.log('click')
      // console.log(parentID)
      const newAmount = decreaseAmount(parentID);
      if(newAmount === 0){
      
        removeItem( parentID );
        parent.parentElement.parentElement.remove();
      }else{
        parent.previousElementSibling.textContent = newAmount;
      }

    }

    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);


  })
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