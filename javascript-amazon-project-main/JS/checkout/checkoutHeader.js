import { calculateCartQuantity } from "../../data/cart.js";

export function quantityInCart() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}