
import { findProduct } from '../store';
import { getStorageItem, getElement } from '../utils';
import { openCart } from './toggleCart';


// $ = DOM element variable
const $cartItemCount = getElement('.cart-item-count'),
      $cartItems     = getElement('.cart-items'),
      $cartTotal     = getElement('.cart-total');

// 
let cart = getStorageItem('cart');


export const addToCart = ( id ) => {
  
  let item = cart.find( cartItem => cartItem.id === id );

  // console.log(item)
  
  if(!item){

    let product = findProduct( id );
    product = {...product, amount: 1};
    
    cart = [...cart, product];
    console.log(cart)
    
  }else{

  }
  // console.log(id)
  openCart();
};

const init = () => {
  console.log(cart);
}
init();