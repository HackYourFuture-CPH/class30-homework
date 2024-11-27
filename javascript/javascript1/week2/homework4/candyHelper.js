const candy = ['sweet', 'chocolate', 'toffee', 'chewing-gum'];
let boughtCandyPrices = [];
function addCandy(candyType, weight){
    if (candy.includes(candyType)){
        boughtCandyPrices.push(weight)
    }
}