/**
 *
 * @param {String} item jsonString
 * @returns {Object | []}
 */
export const getStorageItem = (item) => {
  let storageItem = localStorage.getItem( item );

  if (storageItem) return JSON.parse( storageItem );

  return [];
};

/**
 * 
 * @param {String} name 
 * @param {Object} item 
 */
export const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};
