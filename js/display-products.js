import { addToCart } from './cart';
import { formatPrice } from './utils';

/**
 *
 * @param {product[]} products
 * @param {HTMLElement} elementHTML
 */
export const displayProducts = (products, elementHTML) => {
  // console.log(products, elementHTML);

  elementHTML.innerHTML = products
    .map((product) => {
      const { id, name, company, image, price } = product;

      return `
        <article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}">
            
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon" aria-label="ver detalles del producto">
                <ion-icon name="search-sharp"></ion-icon>
              </a> 
              <button class="product-cart-btn product-icon" data-id="${id}" aria-label="agregar al carrito">
                <ion-icon name="cart"></ion-icon>
              </button> 
            </div>

          </div>
          
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${ formatPrice( price ) }</h4>
          </footer>
        </article>
      `;
    })
    .join('');

    // event
    elementHTML.addEventListener('click', ({ target }) => {
      
      const $parent = target.closest('.product-cart-btn');
      // console.log($parent)

      if ($parent) {
        addToCart($parent.dataset.id);
        // openCart();
      }
    });
};
