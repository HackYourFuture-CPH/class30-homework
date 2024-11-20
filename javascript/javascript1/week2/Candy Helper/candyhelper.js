const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  const candyPriceTable = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    chewingGum: 0.03,
  };

  const totalPrice = candyPriceTable[candyType] * weight;
  boughtCandyPrices.push(totalPrice);
}

addCandy("sweet", 20);
addCandy("chocolate", 30);
addCandy("toffee", 10);
addCandy("chewingGum", 15);
console.log(boughtCandyPrices);

function canBuyMoreCandy(boughtCandy) {
  let totalAmount = 0;
  for (let i = 0; i < boughtCandy.length; i++) {
    totalAmount += boughtCandy[i];
  }
  console.log(totalAmount);
  console.log(amountToSpend);

  if (totalAmount > amountToSpend) {
    console.log("Enough candy for you");
  } else console.log("You can buy more candy, please do");
}

canBuyMoreCandy(boughtCandyPrices);
