

import { displayProducts, store } from '../';
import { septupSearch } from '../filters';
import { getElement } from '../utils';

// loader 
const loading = getElement('.page-loading');

displayProducts( store, getElement('.products-container') );

septupSearch( store );

loading.style.display = 'none';