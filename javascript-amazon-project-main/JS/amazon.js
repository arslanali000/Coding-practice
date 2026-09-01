import {cart, addToCart, calculateCartQuantity, saveToStorage} from '../data/cart.js';
import {products, loadProducts} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

loadProducts(renderProductsGrid);
function renderProductsGrid(){
  let productGrid = document.querySelector(".products-grid")

  let productsHTML = '';

  products.forEach((product)=>{
  productsHTML += `
  <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src=${product.image}>
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
              <select class="products-quantity-${product.id}">
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

            <div class="added-to-cart js-add-cart-${product.id}" >
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary add-js"
            data-product-id = "${product.id}">
              Add to Cart
            </button>
          </div>
  `
  });
  productGrid.innerHTML = productsHTML;

  function quantityInCart(){
  let cartQuantity = calculateCartQuantity();
  

      document.querySelector('.cart-quantity').innerHTML =cartQuantity;
  }
  let timeout;

  function timeoutFunc(productId){
    let added = document.querySelector(`.js-add-cart-${productId}`);
      
      added.classList.add('js-add-cart');
      
      setTimeout(()=>{
        if(timeout){
          clearTimeout(timeout);
        }
        const timeoutId = setTimeout(()=>{
          added.classList.remove('js-add-cart');

        },2000);
            timeout =timeoutId;


      });
  }
  let addBtn = document.querySelectorAll(".add-js");

  addBtn.forEach(button=>{
    button.addEventListener('click',()=>{
      const productId = button.dataset.productId;
      addToCart(productId);
      quantityInCart();
      timeoutFunc(productId);
      

    });

  });
        quantityInCart();

}
