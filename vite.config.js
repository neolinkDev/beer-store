import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        products: './products.html',
        about: './about.html',
        product: './product.html',
        // Agrega más entradas aquí para cada archivo HTML adicional.
      }
    }
  }
});
