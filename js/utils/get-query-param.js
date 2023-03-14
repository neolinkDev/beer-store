

/**
 * 
 * @param {string} id 
 * @returns {string}
 */
export const getQueryParam = (id) => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  return urlParams.get(id);
};
