

import { displayProducts, store } from '../';
import { septupSearch, setupCompanies, setupPrice } from '../filters';
import { getElement } from '../utils';

// loader 
const loading = getElement('.page-loading');

displayProducts( store, getElement('.products-container') );

septupSearch( store );
setupCompanies( store );
setupPrice( store );

loading.style.display = 'none';