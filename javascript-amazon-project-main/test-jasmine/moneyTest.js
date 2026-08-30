import { formatCurrency } from "../JS/utils/money.js";


describe('test Suite: formatCurrency',()=>{
  it('convert cents into dollars',()=>{
    expect(formatCurrency(2095)).toEqual('20.95')
  });
  it('Work with 0',()=>{
    expect(formatCurrency(0)).toEqual('0.00')
  });
  it('Round off',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01')
  });
});