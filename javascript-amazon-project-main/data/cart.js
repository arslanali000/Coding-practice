export const cart = [];
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
