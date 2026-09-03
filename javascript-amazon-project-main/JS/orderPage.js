import { orders } from "../data/order.js";
import { getProduct, loadProductsFetch } from "../data/products.js";
import {formatCurrency} from "../JS/utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { addToCart } from "../data/cart.js";
import {quantityInCart} from "../JS/checkout/checkoutHeader.js";

loadProductsFetch().then(() => {
  renderOrders();
});
console.log(JSON.stringify(orders[0], null, 2));

function renderOrders() {

let orderHTML = '';
orders.forEach(order => {
  let productHTML = '';


  order.products.forEach(orderProduct => {

  const product = getProduct(orderProduct.productId);

  productHTML += 
          `<div class="product-image-container">
              <img src="${product.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${product.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: ${dayjs(orderProduct.estimatedDeliveryTime).format('dddd, MMMM D')}
              </div>
              <div class="product-price">
                ${product.getPrice()} 
              </div>
              <div class="product-quantity">
                Quantity: ${orderProduct.quantity}
              </div>
              <button class="buy-again-button button-primary js-buy-again" data-product-id="${orderProduct.productId}" data-delivery-option-id="${orderProduct.deliveryOptionId}">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html?orderId=${order.id}&productId=${orderProduct.productId}">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
`
  });

  orderHTML += `
        <div class="order-container js-order-container">
          
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${dayjs(order.orderTime).format('MMMM D')}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>${formatCurrency(order.totalCostCents)}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>
          <div class="order-details-grid">
          ${productHTML}
        </div>
      </div>


            
          `

});
let orderGrid = document.querySelector(".js-order-grid");
orderGrid.innerHTML = orderHTML;

document.querySelectorAll(".js-buy-again").forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(productId, 1); 
    button.querySelector('.buy-again-message').innerHTML = 'Added!';
    setTimeout(() => {
      button.querySelector('.buy-again-message').innerHTML = 'Buy it again';
    }, 1500);
    renderOrders();
  });
});
quantityInCart();



}
