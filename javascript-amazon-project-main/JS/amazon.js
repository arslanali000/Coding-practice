let productGrid = document.querySelector(".products-grid")

let productsHTML = '';

products.forEach((product)=>{
 productsHTML += `
<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name} 
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="products-quantity-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-add-cart-${product.id}" >
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary add-js"
          data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>
`
});
productGrid.innerHTML = productsHTML;
let timeout;
let addBtn = document.querySelectorAll(".add-js");
addBtn.forEach(button=>{
  button.addEventListener('click',()=>{
    const productId = button.dataset.productId;
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
  let cartQuantity =0;
  cart.forEach(item=>{
    cartQuantity += item.quantity;

  });
    document.querySelector(".cart-quantity").innerHTML =cartQuantity;
    let added = document.querySelector(`.js-add-cart-${productId}`);
    
    added.classList.add('js-add-cart');
    
    setTimeout(()=>{
      if(timeout){
        clearTimeout(timeout);
      }
      const timeoutId = setTimeout(()=>{
        added.classList.remove('js-add-cart');

      },5000);
          timeout =timeoutId;


    });
    

  });

});