import { getStorageItem, setStorageItem } from './utils';

let store = getStorageItem('store');

/**
 * 
 * @param {product[]} products 
 */
const setupStore = ( products ) => {

  store = products.map(( product ) => {
    
    const { id, fields: { company, name, style, price, images: img, featured }} = product;

    const image = img[0].url
     
    return {
      id,
      company,
      name,
      style,
      price,
      image,
      featured
    };
  });

  setStorageItem( 'store', store );
};


const findProduct = () => {};

export { store, setupStore, findProduct };
