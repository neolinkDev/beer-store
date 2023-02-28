

import { displayProducts, store } from '../';
import { getElement } from '../utils';

// loader 
const loading = getElement('.page-loading');

displayProducts( store, getElement('.products-container') );

loading.style.display = 'none';