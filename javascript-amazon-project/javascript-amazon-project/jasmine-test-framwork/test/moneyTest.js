import {formatMoney} from '../../Script/utils/money.js'


if (formatMoney(2090) === '20.90')
{
  console.log("passed");
}
else {
  console.log("Failed");
}

if (formatMoney(0) === '0.00')
{
  console.log("passed");
}
else {
  console.log("Failed");
}
if (formatMoney(2000.5) === '20.01')
{
  console.log("passed");
}
else {
  console.log("Failed");
}
if (formatMoney(2000.4) === '20.00')
{
  console.log("passed");
}
else {
  console.log("Failed");
}