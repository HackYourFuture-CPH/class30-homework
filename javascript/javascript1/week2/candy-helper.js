let boughtCandyPrices = [];

function addCandy(candyType , weight) {
  if(candyType === 'Sweet')
    boughtCandyPrices.push(weight*0.5)
  
  else if(candyType === 'Chocolate') 
    boughtCandyPrices.push(weight*0.7)

  else if(candyType === 'Toffee') 
    boughtCandyPrices.push(weight*1.1)
  
  else if(candyType === 'Chewing-gum') 
    boughtCandyPrices.push(weight*0.03)
}

const amountToSpend = Math.random() * 100;

function canBuyNewCandy(boughtCandyPrices){
  let total = 0;
  let i = 0;
  /*
  for (let i=0 ; i < boughtCandyPrices.length; i++){
    total += boughtCandyPrices[i];
  }
  */
  while ( i < boughtCandyPrices.length){
    total += boughtCandyPrices[i];
    i++;
  }
  return total;
}


let total = canBuyNewCandy(boughtCandyPrices);
if (total === 0) 
  console.log("You haven't bought any candy yet.");

else if (total > amountToSpend)
  console.log("Enough candy for you!");

else console.log("You can buy more, so please do!");
