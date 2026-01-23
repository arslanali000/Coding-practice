import {formatMoney} from '../../Script/utils/money.js'


describe (("Test Suite: formatMoney"), () => {
it (("Convert cents into dollar"), () => {
  expect(formatMoney(2095)).toEqual("20.95");
  
});
it (("Works with zero"), () => {
   expect(formatMoney(0)).toEqual("0.00");
});
it (("Round up the value"), () => {
   expect(formatMoney(2000.5)).toEqual("20.01");
});
});