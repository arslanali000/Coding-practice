import { products, loadProducts } from '../data/products.js';
import { cart, addToCart } from '../data/cart.js';
import { formatMoney } from './utils/money.js';


loadProducts(renderProductsGrid);

export function renderProductsGrid() {

  let productsHTML = '';
  products.forEach( (product) => {
      productsHTML += `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
            ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
              <select class="product-quantity-select-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()}
            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart-button">
              Add to Cart
            </button>
          </div>
      `;
  });

  document.querySelector('.products-grid').innerHTML = productsHTML; 


  const addToCartButtons = document.querySelectorAll('.js-add-to-cart-button');

  let hideTimeout;



   function updateCartQuantity() {
    let cardQuantity = 0;
        cart.forEach( (item) => {

          cardQuantity += item.quantity;
          const cardQuantityElement = document.querySelector('.cart-quantity');
      cardQuantityElement.innerHTML = cardQuantity;
      
        });
      
  };
  function showAddedToCartMessage(addedToCartElement) {
    
      
      addedToCartElement.classList.add('added-to-cart-visible');
      addedToCartElement.style.opacity = '1';
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout( () => { 
          
          addedToCartElement.classList.remove('added-to-cart-visible');
          addedToCartElement.style.opacity = '';
          
        }, 2000);
  }
  addToCartButtons.forEach( (button, index) => {
      button.addEventListener('click', () => {
        
          const productId = products[index].id;
        const productSelectedQuantity = document.querySelector(`.product-quantity-select-${productId}`);
        const selectedQuantity = Number(productSelectedQuantity.value);
          addToCart(productId, selectedQuantity, index);
          updateCartQuantity();
          const addedToCartElement = button.parentElement.querySelector('.added-to-cart');
          showAddedToCartMessage(addedToCartElement);
        
        
      
        
  });


  });
}

    