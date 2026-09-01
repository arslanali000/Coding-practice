import {cart, calculateCartQuantity} from "../../data/cart.js"
import { getProduct } from "../../data/products.js";
import { getdeliveryOptions } from "../../data/deliveryOption.js";
import { formatCurrency } from "../utils/money.js";
import { addOrder } from "../../data/order.js";

export function renderPaymentSummary(){
  let productPriceCent=0;
  let shippingCost =0;
  cart.forEach(cartItem => {
    const product = getProduct(cartItem.productId);
    productPriceCent += product.priceCents * cartItem.quantity;
    const deliveryOption = getdeliveryOptions(cartItem.deliveryOptionId);
    
    shippingCost += deliveryOption.priceCent
    
  });
  const totalBeforeTaxCents = productPriceCent + shippingCost;
  const taxCents = totalBeforeTaxCents *0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div class = "item-quantity" >Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCent)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingCost)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>`;

document.querySelector(".payment-summary").innerHTML = paymentSummaryHTML;
let cartQuantity =0;
    cartQuantity = calculateCartQuantity();
    document.querySelector(".item-quantity").innerHTML = ` items (${cartQuantity})`;

    document.querySelector(".js-place-order")
    .addEventListener('click',async ()=>{
      try{
      const response = await fetch('https://supersimplebackend.dev/orders',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cart: cart,
        })  
      });
      const order = await response.json();
      addOrder(order);
    } catch (error) {
      console.error("Error placing order:", error);
    }
    window.location.href = 'orders.html';
  });

}
