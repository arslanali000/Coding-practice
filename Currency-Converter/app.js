const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll("select");
const convertBtn = document.getElementById('convert-btn');
const fromCurrency = document.querySelector('select[name="from"]');
const toCurrency = document.querySelector('select[name="to"]');
const msgDiv = document.querySelector('.msg');
const errorMsg = document.getElementById('error-msg');



for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

select.addEventListener("change", (e) => {
  updateFlag(e.target);
});
};
const updateFlag = (element) => {
  let code = element.value;
  let imgTag = element.parentElement.querySelector("img");
  imgTag.src = `https://flagsapi.com/${countryList[code]}/shiny/64.png`;
}
convertBtn.addEventListener('click',  (e) => {
    e.preventDefault();
    updateExchangeRate();
});
 const updateExchangeRate = async () => {
    const amountInput = document.getElementById('amount');   
    const amount = Number(amountInput.value);
    if  (!amountInput.value || amount <= 0) {
       errorMsg.textContent = "Invalid number";
       errorMsg.style.display = "block";
       msgDiv.textContent = "";
    return;

    }
    errorMsg.style.display = "none";

    const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    const rate = data [fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
    const convertedAmount = (amount * rate).toFixed(4);
   
    msgDiv.textContent = `${amount} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;
 }
window.addEventListener("load", () => {
    updateExchangeRate();
}   
);