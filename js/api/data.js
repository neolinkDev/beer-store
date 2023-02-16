

export const fetchProducts = async () => {
  
  try {

    const baseUrl = import.meta.env.VITE_SUPABASE_URL;
    const endpoint = import.meta.env.VITE_ENDPOINT;

    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        apikey: import.meta.env.VITE_API_KEY,
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error(`Error fetching products: ${error.message}`);
  }
};
