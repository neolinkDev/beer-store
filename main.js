// import './style.css';

import './js';
import './js/cart';

import { fetchProducts } from './js/api/data';
import { setupStore, store } from './js';
// import { getElement } from './js/utils';

const init = async () => {

  const products = await fetchProducts();
  
  if( products ){
    setupStore( products );
    
    
    const featured = store.filter((product) => product.featured === true);
  
    console.log(featured)
  }
};

window.addEventListener('DOMContentLoaded', init);
