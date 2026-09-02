


export const orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];



console.log("orders", orders);


export function addOrder(order){
  orders.unshift(order);
  saveToStorage();

}

export function saveToStorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}

