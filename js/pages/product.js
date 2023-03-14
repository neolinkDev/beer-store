

import '../';
import '../cart/';

import { fetchProducts } from '../api/data';

import { addToCart } from '../cart/';
import { formatPrice, getElement, getQueryParam } from '../utils';

// $ = DOM element variable

const $loading = getElement('.page-loading');
const $singleBeerInfo = getElement('.single-product-center');

let beerID;

// 
window.addEventListener('DOMContentLoaded', async () => {

  beerID = getQueryParam('id');

  const dataBeer = await fetchProducts( beerID );

  console.log(dataBeer)

  
  $loading.style.display = 'none';
})