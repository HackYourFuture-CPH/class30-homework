function suggestWhatToWear(num) {
  if (num >= 18) {
    return "T-shirt and Shorts";
  }
  if (num >= 5 && num <= 18) {
    return "Sweater and Pants";
  }
  if (num < 5) {
    return "Jacket, Pants, Hat";
  }
  return "whatever you think keeps alive";
}
console.log(suggestWhatToWear(-2));
