export const changeCurrency = (currency, value) => {
  if (currency == "USD") return value;

  return Math.floor(value * 0.92);
};
