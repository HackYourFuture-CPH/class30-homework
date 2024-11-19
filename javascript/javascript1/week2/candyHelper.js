//Candy helper optional

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    const candyPrices = {
        "sweet": 0.5,
        "chocolate": 0.7,
        "toffee": 1.1,
        "chewing-gum": 0.03
    };

    if (candyPrices[candyType]) {
        const price = candyPrices[candyType] * weight;
        boughtCandyPrices.push(price);
        console.log(`Added ${weight} grams of ${candyType} for $${price.toFixed(2)}`);
    } else {
        console.log("Invalid candy type");
    }
}

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
    let totalCost = 0;

    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalCost = totalCost + boughtCandyPrices[i];
    }

    console.log(`Total spent: $${totalCost.toFixed(2)}, Amount to spend: $${amountToSpend.toFixed(2)}`);

    if (totalCost < amountToSpend) {
        console.log("You can buy more, so please do!");
        return true;
    } else {
        console.log("Enough candy for you!");
        return false;
    }
}

// Example Usage
addCandy("sweet", 20);       // Adds 20 grams of sweet
addCandy("chocolate", 50);   // Adds 50 grams of chocolate
addCandy("toffee", 30);      // Adds 30 grams of toffee
addCandy("chewing-gum", 100); // Adds 100 grams of chewing gum

canBuyMoreCandy();           // Checks if the user can buy more