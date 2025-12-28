const display  = document.querySelector("#display");
let shouldReset = false;

function appendToDisplay(input) {
    if (shouldReset){
        display.value = "";  // start new calculation
        shouldReset = false; 
    }
    display.value += input;
}
function clearDisplay() {
    display.value = "";
    shouldReset = false;
}
function calculate(){
    try{
    display.value = eval(display.value);
    shouldReset = true; 
}
    catch{
    display.value = "Error";
     shouldReset = true;
    }

    
    
}
function clearone(){
    display.value = display.value.slice(0, -1);
}
function changeSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } else if (display.value !== "") {
    display.value = "-" + display.value;
  }
}
