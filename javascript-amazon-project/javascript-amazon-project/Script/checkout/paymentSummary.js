import {cart} from '../../data/cart.js';  
import { getProduct } from '../../data/products.js';
import{getDeliveryOption} from '../../data/deliveryOptions.js';
import formatMoney from '../utils/money.js';
import { addOrder } from '../../data/order.js';


export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  let item = 0;

 cart.forEach((cartItem) => {
  const product = getProduct(cartItem.productId);
  productPriceCents += product.priceCents * cartItem.quantity;
  item += cartItem.quantity;
 const deliveryOption = getDeliveryOption (cartItem.deliveryOptionId)
  shippingPriceCents += deliveryOption.priceCents;
  
 
 const totalBeforetax =  productPriceCents + shippingPriceCents;
 const taxCent = totalBeforetax * 0.1;

 const totalOrder = totalBeforetax + taxCent ;
 
 const paymentSummaryHTML = 
  `
  <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${item}):</div>
            <div class="payment-summary-money">$${formatMoney(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatMoney(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatMoney(totalBeforetax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatMoney(taxCent)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatMoney(totalOrder)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
  
  
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
 });
 document.querySelector('.js-place-order')
 .addEventListener('click', async () => {
  try {
   const response = await fetch('https://supersimplebackend.dev/orders', {
    method: 'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      cart : cart
    })
  })
   const order =  await response.json()
   addOrder(order);
  }
  catch(error) {
    console.log("unexpected Error");
  }
  window.location.href = 'orders.html';
  
 });
}
