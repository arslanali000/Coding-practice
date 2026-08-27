import {cart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';  

let checkoutSummary = document.querySelector(".order-summary");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let checkoutHTML= '';
cart.forEach(cartItem => {
  const productId = cartItem.productId;
  let matchingProductItem;
  products.forEach((product)=>{
    if( product.id === productId){
      matchingProductItem = product;
    }

  });

checkoutHTML +=`

<div class="cart-item-container">
    <div class="delivery-date">
      Delivery date:${new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString('en-US', options)}

    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src=${matchingProductItem.image}>

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProductItem.name}
        </div>
        <div class="product-price">
          $${formatCurrency(matchingProductItem.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">2</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${productId}">
          <div>
            <div class="delivery-option-date">
              ${new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString('en-US', options)}
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${productId}">
          <div>
            <div class="delivery-option-date">
              ${new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString('en-US', options)}
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${productId}">
          <div>
            <div class="delivery-option-date">
            ${new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString('en-US', options)}

            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
});
checkoutSummary.innerHTML = checkoutHTML;
