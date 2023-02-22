export const displayProducts = (products, elementHTML) => {
  // console.log( products, elementHTML );

  elementHTML.innerHTML = products
    .map((product) => {
      const { id, name, company, image, price } = product;

      return `
        <article class="product">
          <div class="product-container">
            <img src="${ image }" class="product-img img" alt="${ name }">
            
            <div class="product-icons">
              <a href="product.html?id=${ id }" class="product-icon">
                <ion-icon name="search-sharp"></ion-icon>
              </a>
              <button class="product-cart-btn product-icon" data-id="${ id }">
                <ion-icon name="cart"></ion-icon>
              </button> 
            </div>

          </div>
          
          <footer>
            <p class="product-name">${ name }</p>
            <h4 class="product-price">$19.99</h4>
          </footer>
        </article>
      `;
    })
    .join('');
};