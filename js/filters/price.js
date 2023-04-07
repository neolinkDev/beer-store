import { displayProducts } from '../display-products.js';
import { getElement } from '../utils/getElement.js';

/**
 *
 * @param {product[]} store
 */
export const setupPrice = (store) => {
  
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.prince-value');

  // all prices of my beers
  let maxPrice = store.map((product) => product.price);

  maxPrice = Math.max(...maxPrice);

  priceInput.value = 0;

  // put the max price on the max property of input
  priceInput.max = maxPrice;

  priceValue.textContent = `Precio: $${0}`;

  let newStore;

  // input event
  priceInput.addEventListener('input', ({ target }) => {
    // convert to number for filtering
    const value = Number(target.value);

    priceValue.textContent = `Precio: $${value}`;

    // filter products by price
    newStore = store.filter((beer) => beer.price <= value);
    // console.log(newStore);

    // display in DOM
    displayProducts(newStore, getElement('.products-container'), true);

    // Display an error message if no products meet the selected filter
    if (newStore.length < 1) {
      const beerProducts = getElement('.products-container');

      beerProducts.innerHTML = `
        <h3 class="filter-error">No hay en existencia</h3>
      `;
    }
  });
};
