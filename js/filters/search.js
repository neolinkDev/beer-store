import { displayProducts } from '../display-products';
import { getElement } from '../utils';


/**
 * Set up search functionality for filtering products by style.
 * @param {Array} store The array of products to filter.
 */
export const septupSearch = (store) => {

  const form = getElement('.input-form');
  const styleInput = getElement('.search-input');

  form.addEventListener('keyup', () => {
    const searchValue = styleInput.value.trim();

    if ( searchValue ) {

      const filterStoreByStyle = store.filter(( product ) => {

        let { style: beerStyle } = product;
        beerStyle = beerStyle.toLowerCase();

        if (beerStyle.startsWith(searchValue.toLowerCase())) {
          return product;
        }
      });

      displayProducts(filterStoreByStyle, getElement('.products-container'), true);

      if (filterStoreByStyle.length < 1) {

        const products = getElement('.products-container');

        products.innerHTML = `
          <h3 class='filter-error'>El estilo no existe</h3>
        `;
      }
    } else {

      displayProducts(store, getElement('.products-container'), true);
    }
  });
};
