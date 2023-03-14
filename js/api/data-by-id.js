

/**
 * 
 * @param {string} productID
 * @returns {Promise<Product>}
 */
export const fetchProductById = async ( productID ) => {

  try {

    // Set up API request URL and headers
    const baseUrl = import.meta.env.VITE_SUPABASE_URL;
    const endpoint = `${import.meta.env.VITE_ENDPOINT}?id=eq.${ productID }`;

    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        apikey: import.meta.env.VITE_API_KEY,
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    //
    const [data] = await response.json();

    if (!data) {
      throw new Error(`Product with ID ${productID} not found`);
    }

    return data;

  } catch (error) {
    console.error(`Error fetching product: ${error.message}`);
  }
};
