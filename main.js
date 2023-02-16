// import './style.css';

import './js';
import './js/cart';

import { fetchProducts } from './js/api/data';
// import { getElement } from './js/utils';

const init = async () => {
  const products = await fetchProducts();

  console.log(products)
};

window.addEventListener('DOMContentLoaded', init);
