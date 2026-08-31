import {cart, removeFromCart, calculateCartQuantity, updateDeliveryOption, updateQuantity} from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import {calculateDeliveryDate, deliveryOptions, getdeliveryOptions} from '../../data/deliveryOption.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary(){


  let checkoutSummary = document.querySelector(".order-summary");
  let checkoutHTML= '';
  cart.forEach(cartItem => {
    const productId = cartItem.productId;
    let matchingProductItem = getProduct(productId);
    const deliveryOptionId = cartItem.deliveryOptionId;
    let deliveryOption = getdeliveryOptions(deliveryOptionId);

      const dateString = calculateDeliveryDate(deliveryOption);

  checkoutHTML +=`
  <div class="cart-item-container js-cart-item-container-${productId}">
      <div class="delivery-date">
        Delivery date: ${dateString}

      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src=${matchingProductItem.image}>

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProductItem.name}
          </div>
          <div class="product-price">
            ${matchingProductItem.getPrice()}
          </div>
          <div class="product-quantity-${productId}">
            <span>
              Quantity: <span class="quantity-label js-quantity-label-${matchingProductItem.id} ">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link"
            data-product-id = "${matchingProductItem.id}">
              Update
            </span>
              <input class="quantity-input js-quantity-input-${matchingProductItem.id}">
              <span class="save-quantity-link link-primary js-save-link"
                data-product-id="${matchingProductItem.id}">
                Save
              </span>
            <span class="delete-quantity-link link-primary js-delete" data-product-id = "${matchingProductItem.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options ">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionHTML(matchingProductItem, cartItem)}
    
        </div>
      </div>
    </div>
      `
  });
  checkoutSummary.innerHTML = checkoutHTML;
  const delBtn = document.querySelectorAll(".js-delete");
  delBtn.forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      removeFromCart(productId);
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    updateCartQuantity();
    renderPaymentSummary();


    })
  let cartQuantity =0;
  function updateCartQuantity(){
    cartQuantity = calculateCartQuantity();
    document.querySelector(".js-header").innerHTML = `${cartQuantity} items`;
  }
    updateCartQuantity();

    

    });
  function deliveryOptionHTML (matchingProductItem, cartItem){
        let html ='';

    deliveryOptions.forEach((deliveryOption)=>{

      const dateString = calculateDeliveryDate(deliveryOption)
      const priceString = deliveryOption.priceCent ===0 ? 'Free': `$${formatCurrency(deliveryOption.priceCent)} - `

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId
      html +=` <div class="delivery-option js-delivery-option"
      data-product-id = "${matchingProductItem.id}"
      data-delivery-option-id = "${deliveryOption.id}">
            <input type="radio"
            ${isChecked ? 'checked': ''}
              class="delivery-option-input"
              name="delivery-option-${matchingProductItem.id}">
            <div>
              <div class="delivery-option-date">
              ${dateString}

              </div>
              <div class="delivery-option-price">
                ${priceString}  Shipping
              </div>
            </div>
          </div>`
    })
      return html;


  }
  document.querySelectorAll(".js-delivery-option").forEach(element=>{
    element.addEventListener('click',()=>{
      const {productId, deliveryOptionId} = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();



    });
  });  
   document.querySelectorAll('.js-update-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.classList.add('is-editing-quantity');
      });
    });
   document.querySelectorAll('.js-save-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
  
        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.classList.remove('is-editing-quantity');

        const quantityInput = document.querySelector(
          `.js-quantity-input-${productId}`
        );
        const newQuantity = Number(quantityInput.value);
        updateQuantity(productId, newQuantity);

        renderOrderSummary();
        renderPaymentSummary();

        // We can delete the code below (from the original solution)
        // because instead of using the DOM to update the page directly
        // we can use MVC and re-render everything. This will make sure
        // the page always matches the data.

        // const quantityLabel = document.querySelector(
        //   `.js-quantity-label-${productId}`
        // );
        // quantityLabel.innerHTML = newQuantity;
  
        // updateCartQuantity();
      });
    });

}


