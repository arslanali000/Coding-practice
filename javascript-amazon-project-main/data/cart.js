
export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1

  }
];
export function addToCart(productId) {
    
    const selectedQuantity= document.querySelector(`.products-quantity-${productId}`);
    let matchingItem;
    cart.forEach(item=>{
      if(productId === item.productId){
        matchingItem = item;
      }
    });
    const quantitySelected = parseInt(selectedQuantity.value);
    if(matchingItem){
      matchingItem.quantity += quantitySelected;
    }
    else{
    cart.push({
      productId : productId,
      quantity: quantitySelected
    });
  };
}
export function removeFromCart(productId){
  let newCart =[];
  cart.forEach(item=>{
    if(item.productId!==productId){
    newCart.push(item)
  }
  cart = newCart;

  })
  


}