let boughtCandyPrices = [];
const candyPrices = {
  'sweet': 0.5,
  'chocolate': 0.7,
  'toffee': 1.1,
  'chewing-gum': 0.03
};

const amountToSpend = Math.random() * 100;

function addCandy(candyType , weight) {
  candyType = candyType.toLowerCase();
  if (candyPrices[candyType]) {
    boughtCandyPrices.push(weight * candyPrices[candyType]);
  } else {
    console.log('Invalid candy type');
  }
}

function canBuyNewCandy(){
  let total = 0;
  let i = 0;
  while ( i < boughtCandyPrices.length){
    total += boughtCandyPrices[i];
    i++;
  }
  return total;
}

function buyCandy() {
  const total = canBuyNewCandy(); 
  if (total === 0) {
    console.log("You haven't bought any candy yet.");
  } else if (total > amountToSpend) {
    console.log("Enough candy for you!");
  } else {
    console.log("You can buy more, so please do!");
  }
}

addCandy('Sweet', 10); 
addCandy('Chocolate', 5); 
buyCandy();