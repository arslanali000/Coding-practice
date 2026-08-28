import {cart, removeFromCart, calculateCartQuantity} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import {deliveryOptions} from '../data/deliveryOption.js';



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
  const deliveryOptionId = cartItem.deliveryOptionId;
  let deliveryOption;
  deliveryOptions.forEach(option=>{
    if(option.id === deliveryOptionId){
      deliveryOption =option;
    }

  });
  let today = dayjs();
    const deliveryDate= today.add(deliveryOption.deliveryDays,'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

checkoutHTML +=`
<div class="cart-item-container js-item-${productId}">
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
          $${formatCurrency(matchingProductItem.priceCents)}
        </div>
        <div class="product-quantity-${productId}">
          <span>
            Quantity: <span class="quantity-label-${productId} ">1</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete" data-product-id = "${matchingProductItem.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        ${deliveryOptionHTML(productId, cartItem)}
  
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
   const container = document.querySelector(`.js-item-${productId}`);
   container.remove();
  updateCartQuantity();

  })
let cartQuantity =0;
function updateCartQuantity(){
  cartQuantity = calculateCartQuantity();
  document.querySelector(".js-header").innerHTML = `${cartQuantity} items`;
}
   updateCartQuantity();

  

   });
function deliveryOptionHTML (productId, cartItem){
      let html ='';

  deliveryOptions.forEach((deliveryOption)=>{
    let today = dayjs();
    const deliveryDate= today.add(deliveryOption.deliveryDays,'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    const priceString = deliveryOption.priceCent ===0 ? 'Free': `$${formatCurrency(deliveryOption.priceCent)} - `

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId
    html +=` <div class="delivery-option">
          <input type="radio"
          ${isChecked ? 'checked': ''}
            class="delivery-option-input"
            name="delivery-option-${productId}">
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



