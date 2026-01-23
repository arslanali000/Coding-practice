import { products } from '../data/products.js';
function Cart(localStorageKey) {
const cart ={
 cartItem: undefined,
 loadFromStorage () {
  this.cartItem = JSON.parse(localStorage.getItem(localStorageKey));
if (!this.cartItem) {this.cartItem =

[
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
    }
    
];
}
},
saveToStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.cartItem));
},
addToCart(productId, selectedQuantity) {     
    
let matchingItem = null;

        this.cartItem.forEach( (cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });
        if (matchingItem) {
            matchingItem.quantity += selectedQuantity;
        } else {
        this.cartItem.push({
          productId: productId,
          productName: products.name,
          quantity: selectedQuantity,
          deliveryOPtionId: '1'
        });
      }
        this.saveToStorage();
},
removeFromCart(productId) {
    const newCart = [];
    this.cartItem.forEach( (cartItem) => {
        if (cartItem.productId !== productId) {
        newCart.push(cartItem);
    }
  });

  this.cartItem = newCart;

  this.saveToStorage();
},
updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  this.cartItem.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  this.saveToStorage();
}

};
return cart;
}
const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
cart.addToCart('3ebe75dc-64d2-4137-8860-1f5a963e534b',1 );
 businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
