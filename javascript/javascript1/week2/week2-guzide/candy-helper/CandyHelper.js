const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let pricePerGram;
  switch (candyType) {
    case "sweet":
      pricePerGram = 0.5;
      break;
    case "chocolate":
      pricePerGram = 0.7;
      break;
    case "toffee":
      pricePerGram = 1.1;
      break;
    case "chewing-gum":
      pricePerGram = 0.03;
      break;
    default:
      console.log("Invalid candy type");
      break;
  }

  const candyPrice = pricePerGram * weight;
  boughtCandyPrices.push(candyPrice);
  console.log(candyType + " added for " + candyPrice + "dkk");
}

let amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let totalPrice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }
  console.log(totalPrice);
  if (totalPrice < amountToSpend) {
    console.log("You can buy more, so please do!");
    return true;
  } else {
    console.log("Enough candy for you!");
    return false;
  }
}

addCandy("toffee", 40);
addCandy("sweet", 61);
addCandy("chewing-gum", 10);
canBuyMoreCandy();
console.log(boughtCandyPrices);
