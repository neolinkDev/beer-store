// import './style.css';

import './js';
import './js/cart';

import { fetchProducts } from './js/api/data';
import { displayProducts, setupStore, store } from './js';
import { getElement } from './js/utils';

const init = async () => {

  const products = await fetchProducts();
  
  if( products ){
    setupStore( products );
    
    //
    const featured = store.filter((product) => product?.featured);
    // console.log( featured instanceof Array )

    //
    displayProducts( featured, getElement('.featured-center') );
  }
};

window.addEventListener('DOMContentLoaded', init);
