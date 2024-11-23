const candyTypes = ["sweet", "chocolate", "toffee", "chewing-gum"];
const gramPrice = [0.5, 0.7, 1.1, 0.03];
let boughtCandyPrices = [];

function addCandy(candyType, weight) {
    for (let i = 0; i < candyTypes.length; i++) {
        if (candyTypes[i] === candyType) {
            boughtCandyPrices.push(weight * gramPrice[i]);
            return; }
    };
}
