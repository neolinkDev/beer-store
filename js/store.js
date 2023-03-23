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

/**
 * 
 * @param {string} id 
 * @returns 
 */
const findProduct = ( id ) => {
  
  // return the first item with the same id
  let product = store.find( (product) => product.id.toString() === id );
  // console.log(product)
  return product;

};

export { store, setupStore, findProduct };
