
/**
 * @description Gets the elements of the DOM.
 * @param {String} selector 
 * @returns {HTMLElement}
 */
export const getElement = ( selector ) => {

  const element = document.querySelector( selector );

  if ( element ) return element;

  throw new Error(
    `Verifica el selector "${ selector }", el elemento no existe`
  );
};
