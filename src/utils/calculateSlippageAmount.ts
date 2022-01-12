import { Fraction, Percent } from '@uniswap/sdk-core';

export function calculateSlippageAmount(value: any, slippage: number): string {
  const fraction = new Fraction(slippage, 100)
    .multiply(new Fraction(value, 1))
    .divide(new Fraction(100, 1))
    .subtract(new Fraction(value, 1));

  console.log(fraction.quotient.toString().split('-'))

  const removeSign = Math.abs(parseFloat(fraction.toFixed(0).toString()));

  console.log(slippage)

  return fraction.quotient.toString().split('-')[1];
}
