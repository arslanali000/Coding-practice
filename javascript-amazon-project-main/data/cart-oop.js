function Cart(localStorageKey){
   const cart = {
    cartItems : undefined,
    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
    if(!this.cartItems){
      this.cartItems = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '2'
      },{
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 2,
        deliveryOptionId: '1'

      }
    ];
    }

    },
    saveToStorage (){
    localStorage.setItem(localStorageKey , JSON.stringify(this.cartItems));
  },

  addToCart(productId, quantity) {
      
      let matchingItem;
      this.cartItems.forEach(item=>{
        if(productId === item.productId){
          matchingItem = item;
        }
      });
    let quantitySelected;
      if (quantity !== undefined) {
        quantitySelected = quantity;
      } else {
        const selectedQuantity = document.querySelector(`.products-quantity-${productId}`);
        quantitySelected = parseInt(selectedQuantity.value);
      }
        if(matchingItem){
        matchingItem.quantity += quantitySelected;
        
      }
      else{
      this.cartItems.push({
        productId : productId,
        quantity: quantitySelected,
        deliveryOptionId: '1'
      });
      

    };
    
    this.saveToStorage();
  },

  removeFromCart(productId){
    let newCart =[];
    this.cartItems.forEach(item=>{
      if(item.productId!==productId){
      newCart.push(item)
    }

    })
      this.cartItems = newCart;

    

  this.saveToStorage();
  },

  calculateCartQuantity() {
    let cartQuantity = 0;

    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });


    return cartQuantity;
  }, 

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
      this.cartItems.forEach(item=>{
        if(productId === item.productId){
          matchingItem = item;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  },

  updateQuantity(productId, newQuantity) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.quantity = newQuantity;
    this.saveToStorage();
  }
  };
  return cart;

}
const cart =Cart('cart-oop');
const businessCart = Cart('cart-business');
const userCart = Cart('user-cart');
 

  cart.loadFromStorage();
  cart.addToCart("54e0eccd-8f36-462b-b68a-8182611d9add", 4);
  businessCart.loadFromStorage();
  userCart.loadFromStorage();
  userCart.addToCart("dd82ca78-a18b-4e2a-9250-31e67412f98d", 2);

  console.log(cart);
  console.log(businessCart);

  console.log(userCart);







  
  