

/**
 * 
 * @returns {string}
 */
export const getQueryParam = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  return urlParams.get('id');
};
