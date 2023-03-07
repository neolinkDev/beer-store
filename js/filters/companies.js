import { displayProducts } from '../display-products';
import { getElement } from '../utils/getElement';

/**
 * 
 * @param {product[]} store 
 */
export const setupCompanies = ( store ) => {

  // Validate that the 'store' parameter is an array
  // Validación del parámetro de entrada
  if (!Array.isArray(store)) {
    throw new Error('El parámetro store debe ser un array');
  }

  // Obtiene el elemento DOM donde se mostrarán los botones
  // Get the DOM element that will display the button companies
  const displayingCompaniesDOM = getElement('.companies');

  // Get a list of all the unique company names in the store
  const companies = [
    'todas',
    ...new Set(store.map( product => product.company ))
  ];
  
  // Generate the HTML for the company buttons
  const buttonHtml = companies.map(company => `
    <button class="company-btn">${company}</button>
  `).join('');

  displayingCompaniesDOM.innerHTML = buttonHtml;

  // Add a click event listener to the DOM element to handle filtering the store
  displayingCompaniesDOM.addEventListener('click', handleClickEvent( store ));
}

/**
 * 
 * @param {Product[]} store 
 */
const handleClickEvent = (store) => {
  return ({ target }) => {
    if (target.classList.contains('company-btn')) {
      let newStore = [];

      // If the 'all' button was clicked, show all the products in the store
      if (target.textContent === 'todas') {
        newStore = [...store];
      } else {
        newStore = store.filter((beer) => beer.company === target.textContent);
      }

      displayProducts(newStore, getElement('.products-container'));
    }
  };
};