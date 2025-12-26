
// let modeBtn = document.querySelector(".change-mode");
// let currMode = "light";
// let lastDiv = document.querySelector("body");

// function change() {
//     if (currMode === "light") {
//         currMode = "dark";
//         lastDiv.classList.remove("light");
//         lastDiv.classList.add("dark");
        
//     }
//     else {
//         currMode = "light";
//         lastDiv.classList.remove("dark");
//         lastDiv.classList.add("light");
//     }
//     console.log(currMode);
// }

// modeBtn.addEventListener("click", change);

// Get elements
// 1. Get all Modal Elements
// Select all Modals
const cartModal = document.getElementById("cartModal");
const buyModal = document.getElementById("buyModal");
const imageModal = document.getElementById("imageModal");

// Select all Trigger Buttons
const cartBtn = document.getElementById("addToCartBtn");
const buyBtn = document.getElementById("Buy");
const featImgDiv = document.querySelector(".feat-prod-img");

// Select the Image inside the modal
const fullImgElement = document.getElementById("fullScreenImg");

// --- 1. OPENING LOGIC ---

// Open Cart
cartBtn.addEventListener('click', () => {
  cartModal.style.display = "block";
});

// Open Buy
buyBtn.addEventListener('click', () => {
  buyModal.style.display = "block";
});

// Open Image Full Screen
featImgDiv.addEventListener('click', () => {
  let bg = window.getComputedStyle(featImgDiv).backgroundImage;
  let url = bg.replace('url("', '').replace('")', '');
  fullImgElement.src = url;
  imageModal.style.display = "block";
});

// --- 2. CLOSING LOGIC (Universal) ---

// Listen for clicks on the entire window
window.addEventListener('click', (event) => {
  // If user clicks an "X" button
  if (event.target.classList.contains('close-btn') || 
      event.target.classList.contains('close-btn1') || 
      event.target.id === 'forceCloseImg') {
    
    cartModal.style.display = "none";
    buyModal.style.display = "none";
    imageModal.style.display = "none";
  }

  // If user clicks the dark background outside the modal content
  if (event.target === cartModal || 
      event.target === buyModal || 
      event.target === imageModal) {
    
    cartModal.style.display = "none";
    buyModal.style.display = "none";
    imageModal.style.display = "none";
  }
});