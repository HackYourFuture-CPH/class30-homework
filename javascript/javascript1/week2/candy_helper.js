let boughtCandyPrices = [];

const amountToSpend = Math.random() * 100;
console.log(`You can spend up to: ${amountToSpend.toFixed(2)}`);

addCandy("sweet", 20);
addCandy("chocolate", 30);
addCandy("toffee", 50);

canBuyMoreCandy();

function addCandy(candyType, weight) {
    let pricePerGram = 0;;

    switch (candyType.toLowerCase()) {
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
            console.log("Unknown candy type!");
            return; 
    }

    const price = pricePerGram * weight;
    boughtCandyPrices.push(price);

    console.log(`Added ${candyType} candy with ${price.toFixed(2)} price`);
}

function canBuyMoreCandy() {
    let totalPrice = 0;

    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice += boughtCandyPrices[i];
    }

    console.log(`Total candy price: ${totalPrice.toFixed(2)}`);
    
    if (totalPrice < amountToSpend) {
        console.log("You can buy more, so please do!");
        return true;
    } else {
        console.log("Enough candy for you!");
        return false;
    }
}

