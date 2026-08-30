import { formatCurrency } from "../JS/utils/money.js";

if (formatCurrency(2000.4) === '20.00')
{
  console.log('passed')
} else{
  console.log('failed')
}
if (formatCurrency(0) === '0.00')
{
  console.log('passed')
} else{
  console.log('failed')
}