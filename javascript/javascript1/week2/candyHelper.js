const boughtCandyPrices = [];

function addCandy(candyType, weight){
    const pricePerGram = {
        sweet: 0.5,
        chocolate: 0.7,
        toffee: 1.1,
        chewingGum: 0.03,
    }
    if(candyType === 'sweet'){
       boughtCandyPrices.push(pricePerGram.sweet * weight);
    }else if(candyType === 'chocolate'){
        boughtCandyPrices.push(pricePerGram.chocolate * weight);
    }else if(candyType === 'toffee'){
        boughtCandyPrices.push(pricePerGram.toffee * weight);
    }else if(candyType === 'chewingGum'){
        boughtCandyPrices.push(pricePerGram.chewingGum * weight);
    }
}
addCandy('sweet', 20);
addCandy('chocolate', 30);
addCandy('toffee', 10);
addCandy('chewingGum', 50);
console.log(boughtCandyPrices);

let boughtCandySum = 0;
// for loops:
// for (let i = 0; i < boughtCandyPrices.length; i++) {
//     boughtCandySum += boughtCandyPrices[i];
// }

// while loops:
let i = 0
while (i < boughtCandyPrices.length) {
    boughtCandySum += boughtCandyPrices[i];
    i++
}
console.log(boughtCandySum);


let amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
    if(amountToSpend - boughtCandySum > 0){
        return 'You can buy more, so please do!'
    }else return 'Enough candy for you!';
}
console.log(canBuyMoreCandy());
