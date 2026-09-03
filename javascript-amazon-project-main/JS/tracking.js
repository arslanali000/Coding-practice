import {orders} from "../data/order.js";
import {getProduct,loadProductsFetch} from "../data/products.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import {quantityInCart} from "./checkout/checkoutHeader.js";

loadProductsFetch().then(() => {
  renderTracking();
});
function renderTracking() {
 quantityInCart();
 const url = new URLSearchParams(window.location.search);
 const orderId = url.get("orderId");
 const productId = url.get("productId");
 const order = orders.find(order => order.id === orderId);

   let productHTML = '';
   if(order){
    const orderProduct = order.products.find(product => product.productId === productId);
    if(orderProduct){
      const product = getProduct(orderProduct.productId);
      const dateString = dayjs(orderProduct.estimatedDeliveryTime).format('dddd, MMMM D');
const { status, percent } = getProgressStatus(order.orderTime, orderProduct.estimatedDeliveryTime);


  productHTML += `
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${dateString}
        </div>

        <div class="product-info">
          ${product.name}
        </div>

        <div class="product-info">
          Quantity: ${orderProduct.quantity}
        </div>

        <img class="product-image" src="${product.image}">

        <div class="progress-labels-container">
        <div class="progress-label ${status === 'preparing' ? 'current-status' : ''}">
          Preparing
        </div>
        <div class="progress-label ${status === 'shipped' ? 'current-status' : ''}">
          Shipped
        </div>
        <div class="progress-label ${status === 'delivered' ? 'current-status' : ''}">
          Delivered
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${percent}%"></div>
      </div>
        `

  }
}
document.querySelector(".order-tracking").innerHTML = productHTML;
}
function getProgressStatus(orderTime, estimatedDeliveryTime) {
  const today = dayjs();
  const start = dayjs(orderTime);
  const end = dayjs(estimatedDeliveryTime);

  const totalDuration = end.diff(start);
  const elapsed = today.diff(start);

  if (today.isAfter(end) || elapsed >= totalDuration) {
    return { status: 'delivered', percent: 100 };
  }

  const percent = (elapsed / totalDuration) * 100;

  if (percent < 10) {
    return { status: 'preparing', percent };
  } else if (percent < 100) {
    return { status: 'shipped', percent };
  }
}
