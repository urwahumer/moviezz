export const convertNumberToTime = num => {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
};

export const currencyFormatter = data => {
  let currency = data.toString();
  currency = currency.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return currency;
};
