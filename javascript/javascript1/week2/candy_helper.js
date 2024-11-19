const candyStore = 
{   "Sweet": 0.5,
    "Chocolate": 0.7, 
    "Toffee": 1.1,
    "Chewing-gum": 0.03
}
const boughtCandyPrices = []

function addCandy(candyType, weight){
    
    let findWeight = candyStore[candyType]
    const total = findWeight * weight
    boughtCandyPrices.push(total);
    return boughtCandyPrices; 
    

}

const amountToSpend = Math.random() * 100;
console.log(amountToSpend)

console.log(addCandy("Sweet", 20))
console.log(addCandy("Toffee", 10))
console.log(addCandy("Chewing-gum", 750))
console.log(addCandy("Chocolate", 30))

function canBuyMoreCandy(){
    let message = " "
    let total = 0
    for(let item in boughtCandyPrices){
        total += boughtCandyPrices[item]
        
    }
    console.log(total)
    let CanIBuyMore = total ? total < amountToSpend : total > amountToSpend
    if(total <= amountToSpend){
        message = "You can buy more, please do"
    }
    else{
        message = "Enough candy for you!"
    }

    return CanIBuyMore + " " + message
}
console.log(canBuyMoreCandy())