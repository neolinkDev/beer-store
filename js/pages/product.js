

import '../';
import '../cart/';

import { fetchProducts } from '../api/data';

import { addToCart } from '../cart/';
import { formatPrice, getElement, getQueryParam } from '../utils';

// $ = DOM element variable

const $loading              = getElement('.page-loading'),
      $singleBeerInfo       = getElement('.single-product-center'),
      $pageHeroTitle        = getElement('.page-hero-title'),
      $image                = getElement('.single-product-img'),
      $singleProducTitle    = getElement('.single-product-title'),
      $singleProductCompany = getElement('.single-product-company'),
      $singleProductPrice   = getElement('.single-product-price'),
      $singleProductStyle   = getElement('.single-product-style'),
      $addToCartBtn         = getElement('.addToCartBtn');

let beerID;

// 
window.addEventListener('DOMContentLoaded', async () => {

  beerID = getQueryParam();
 
  const dataBeer = await fetchProducts( beerID );

  if(dataBeer){
    // console.log(dataBeer)
    const { fields } = dataBeer;
    console.log(fields)
    const { name, price, style, images: img, company } = fields;
    const imageSingle = img[0].url
    
    document.title = `${ name } | BeerStore`;
    $pageHeroTitle.textContent = `Cervezas / ${ name }`;
    $image.src = imageSingle;
    $singleProducTitle.textContent = name;
    $singleProductCompany.textContent = company;
    $singleProductPrice.textContent = `Precio ${formatPrice( price )}`;
    $singleProductStyle.textContent = style;

    
  }else{
    $singleBeerInfo.innerHTML = `
      <div>
        <h3 class="error">Producto no encontrado</h3>
        <a href="index.html" class="btn">inicio</a>
      </div> 
    `;
  }

  $loading.style.display = 'none';
})

// event click
$addToCartBtn.addEventListener('click', () => {
   
  addToCart( beerID );
})